import Mongoose from "mongoose";
import { DBURL } from "../config/config.js";

const dbConnection = async () => {
  try {
    const connect = await Mongoose.connect(DBURL, {});
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default dbConnection;
