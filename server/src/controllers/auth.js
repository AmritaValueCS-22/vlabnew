import { StatusCodes } from "http-status-codes";
import { comparePassword, hashPassword } from "../helpers/hashing.js";
import { compareToken, generateToken } from "../helpers/jwtToken.js";
import User from "../models/userSchema.js";
import getResponse from "../helpers/response.js";
import LoginRecord from "../models/loginDetailSchema.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (user) {
      const hashPaaword = await comparePassword(password, user.password);
      console.log(hashPaaword);
      if (hashPaaword) {
        user.isLoggedIn = true;
        await user.save();
        const token = await generateToken(user.id);
        await LoginRecord.create({ user: user._id });

        const successfull = {
          status: StatusCodes.OK,
          payload: {
            message: "Logged in sucessfully",
            token,
            userId: user.id,
            role: user.role,
            status: 200,
            userName: user.username,
          },
        };

        return getResponse(res, successfull);
      } else {
        const failed = {
          status: StatusCodes.BAD_REQUEST,
          payload: {
            error: "Invalid Password",
            status: 400,
          },
        };
        return getResponse(res, failed);
      }
    } else {
      const failed = {
        status: StatusCodes.BAD_REQUEST,
        payload: {
          error: "Could not find specified user name",
          status: 400,
        },
      };
      return getResponse(res, failed);
    }
  } catch (error) {
    console.log(error);
    const failed = {
      status: StatusCodes.BAD_REQUEST,
      payload: {
        error: "Something went wrong",
        status: 400,
      },
    };
    return getResponse(res, failed);
  }
};

export const register = async (req, res) => {
  const {
    fullname,
    email,
    password,
    confirmpassword,
    age,
    gender,
    phonenumber,
    state,
    country,
    profession,
    college,
    subject,
    university,
    schoolId,
    username,
    role,
  } = req.body;

  try {
    const checkUserName = await User.find({});
    const getUserName = checkUserName
      .map((item) => item.username)
      .filter((subItem) => subItem !== undefined)
      .some((a) => a === username);
    console.log(getUserName);
    if (getUserName) {
      const failed = {
        status: StatusCodes.BAD_REQUEST,
        payload: {
          error: "Someone already has that username. Try another?",
          status: 400,
        },
      };
      return getResponse(res, failed);
    }
    if (password !== confirmpassword) {
      const failed = {
        status: StatusCodes.BAD_REQUEST,
        payload: {
          error: "Password mismatch",
          status: 400,
        },
      };
      return getResponse(res, failed);
    }
    const user = await User.findOne({ email });
    if (user) {
      const failed = {
        status: StatusCodes.BAD_GATEWAY,
        payload: {
          error: `This email ${email} already exists in the database.Please signin.`,
          status: 400,
        },
      };
      return getResponse(res, failed);
    } else {
      const hashedPassword = await hashPassword(password);
      const registerUser = new User({
        fullname,
        email,
        password: hashedPassword,
        age,
        gender,
        phonenumber,
        state,
        country,
        profession,
        college,
        subject,
        university,
        schoolId,
        isLoggedIn: false,
        username,
        role: role || "4",
      });
      await registerUser.save();
      const successfull = {
        status: StatusCodes.CREATED,
        payload: {
          status: 200,
          message:
            "You are Successfully Registered! Please login to access your Profile",
        },
      };
      return getResponse(res, successfull);
    }
  } catch (error) {
    const failed = {
      status: StatusCodes.BAD_REQUEST,
      payload: {
        error: "Something went wrong",
        status: 400,
      },
    };
    return getResponse(res, failed);
  }
};

export const logout = async (req, res) => {
  try {
    const { token, userId } = req.params;
    const verifiedToken = await compareToken(token);

    if (verifiedToken) {
      const user = await User.find({ id: userId });
      const latestLoginRecord = await LoginRecord.findOne({
        user: userId,
      }).sort({
        loginTime: -1,
      });
      if (latestLoginRecord) {
        latestLoginRecord.isLoggedIn = false;
        user.isLoggedIn = false;
        await latestLoginRecord.save();
        const successfull = {
          status: StatusCodes.OK,
          payload: {
            message: "Logout Sucessfully",
            status: 200,
          },
        };
        return getResponse(res, successfull);
      } else {
        const failed = {
          status: StatusCodes.BAD_REQUEST,
          payload: {
            error: "Something went wrong.Please try again",
            status: 400,
          },
        };
        return getResponse(res, failed);
      }
    } else {
      const failed = {
        status: StatusCodes.BAD_REQUEST,
        payload: {
          error: "Something went wrong",
          status: 400,
        },
      };
      return getResponse(res, failed);
    }
  } catch (error) {
    const failed = {
      status: StatusCodes.BAD_REQUEST,
      payload: {
        error: "Something went wrong",
        status: 400,
      },
    };
    return getResponse(res, failed);
  }
};
