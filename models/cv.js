const { Schema, model } = require("mongoose");

const cvSchema = new Schema(
  {
    data: {
      type: String,
      required: [true, "Name is required"],
    },
  },
  { versionKey: false }
);

const Cv = model("cv", cvSchema);

module.exports = {
  Cv,
};
