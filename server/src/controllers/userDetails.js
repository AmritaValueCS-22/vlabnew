import { StatusCodes } from "http-status-codes";
import user from "../models/userSchema.js";
import getResponse from "../helpers/response.js";
import { hashPassword } from "../helpers/hashing.js";

export const getUserDetails = async (req, res) => {
  try {
    const { userRole } = req.query;
    let userDetails;
    if (userRole !== "") {
      switch (userRole) {
        case "1":
          {
            userDetails = await user.find({ role: { $ne: "1" } });
            const successfull = {
              status: StatusCodes.OK,
              payload: {
                message: "",
                userDetails,
                status: 200,
              },
            };
            return getResponse(res, successfull);
          }

          break;

        default:
          break;
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

export const editUser = async (req, res) => {
  try {
    const { id } = req.query;
    const userUpdateData = req.body;
    if (userUpdateData) {
      const updateUser = await user.findOneAndUpdate(
        { _id: id },
        { $set: userUpdateData },
        { new: true }
      );
      await updateUser.save();
      const successfull = {
        status: StatusCodes.OK,
        payload: {
          message: "User Detail updated successfully",
          status: 200,
        },
      };
      return getResponse(res, successfull);
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
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.query;

    const deletedUser = await user.findByIdAndDelete(id);
    if (deletedUser) {
      const userDetails = await user.find({ role: { $ne: "1" } });
      const successfull = {
        status: StatusCodes.OK,
        payload: {
          message: "User deleted successfully",
          status: 200,
          userDetails,
        },
      };
      return getResponse(res, successfull);
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
export const addBulkUser = async (req, res) => {
  try {
    const data = req.body;

    if (data.length > 0) {
      const hashedData = await Promise.all(
        data.map(async (item) => {
          return {
            ...item,
            password: await hashPassword(item.password),
          };
        })
      );
      await user.insertMany(hashedData);
      const userDetails = await user.find({ role: { $ne: "1" } });
      const successfull = {
        status: StatusCodes.OK,
        payload: {
          message: "Users added successfully",
          userDetails,
          status: 200,
        },
      };
      return getResponse(res, successfull);
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
