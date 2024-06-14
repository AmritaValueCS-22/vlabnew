import { Schema, model } from "mongoose";

const experiementSchema = new Schema({
  experimentId: {
    type: String,
    required: true,
  },
  labId: {
    type: String,
    required: true,
  },
  broadAreaId: {
    type: String,
    required: true,
  },
  experimentName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});
const labSchema = new Schema({
  labId: {
    type: String,
    required: true,
  },
  broadAreaId: {
    type: String,
    required: true,
  },
  labName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  experiments: [experiementSchema],
});
const broadAreaSchema = new Schema({
  broadAreaId: {
    type: String,
    required: true,
  },
  broadAreaName: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
  },
  labs: [labSchema],
});

export default model("BroadArea", broadAreaSchema);
