const { Schema, model } = require("mongoose");

const cvResultSchema = new Schema(
  {
    watched: {
      type: String,
      required: [true, "Name is required"],
    },
    code: {
      type: String,
      required: [true, "Name is required"],
    },
  },
  { versionKey: false }
);

const Result = model("result", cvResultSchema);

module.exports = {
  Result,
};
