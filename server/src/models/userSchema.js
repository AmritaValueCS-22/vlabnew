import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  fullname: {
    type: String,
  },
  age: {
    type: String,
  },
  gender: {
    type: String,
  },
  phonenumber: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  profession: {
    type: String,
  },
  college: {
    type: String,
  },
  subject: {
    type: String,
  },
  university: {
    type: String,
  },
  role: {
    type: String,
  },
  isLoggedIn: {
    type: Boolean,
  },
  registerDate: {
    type: Date,
    default: Date.now,
  },
  schoolId: {
    type: String,
  },
  isLoggedIn: {
    type: Boolean,
  },
});

export default model("User", userSchema);
