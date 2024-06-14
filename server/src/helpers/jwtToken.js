import jsonwebtoken from "jsonwebtoken";
import { JWT_KEY } from "../config/config.js";

const generateToken = async (id) => {
  try {
    const payload = {
      id,
    };
    const token = jsonwebtoken.sign(payload, JWT_KEY, { expiresIn: "1hrs" });
    return token;
  } catch (error) {
    console.log("error");
  }
};

const compareToken = async (token) => {
  try {
    const decode = jsonwebtoken.verify(token, JWT_KEY);
    return decode;
  } catch (error) {
    console.log("not verified");
  }
};
export { generateToken, compareToken };
