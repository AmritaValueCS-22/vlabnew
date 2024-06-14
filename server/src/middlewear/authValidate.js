import { StatusCodes } from "http-status-codes";

export const LoginValidate = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "username and password are required",
      statuscode: 400,
    });
  }

  next();
};

export const RegisterValidate = async (req, res, next) => {
  const { email, password, confirmpassword, fullname, schoolId } = req.body;
  if (!email || !password || !fullname || !confirmpassword || !schoolId) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Please enter mandatory feilds",
      statuscode: 400,
    });
  }
  next();
};
