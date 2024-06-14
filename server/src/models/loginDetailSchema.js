import { Schema, model } from "mongoose";

const loginDetailsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  loginTime: {
    type: Date,
    default: Date.now,
  },
  isLoggedIn: {
    type: Boolean,
    default: true,
  },
});

const LoginRecord = model("LoginRecord", loginDetailsSchema);
export default LoginRecord;
