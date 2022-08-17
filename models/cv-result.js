const { Schema, model } = require("mongoose");

const cvResultSchema = new Schema(
  {
    watched: {
      watchtrailer: {
        opened: { type: String, required: [true, "Name is required"] },
        time: { type: String, required: [true, "Name is required"] },
      },
      usersapp: {
        opened: { type: String, required: [true, "Name is required"] },
        time: { type: String, required: [true, "Name is required"] },
      },
      barbershop: {
        opened: { type: String, required: [true, "Name is required"] },
        time: { type: String, required: [true, "Name is required"] },
      },
      moviegallery: {
        opened: { type: String, required: [true, "Name is required"] },
        time: { type: String, required: [true, "Name is required"] },
      },
      webstudio: {
        opened: { type: String, required: [true, "Name is required"] },
        time: { type: String, required: [true, "Name is required"] },
      },
      kapusta: {
        opened: { type: String, required: [true, "Name is required"] },
        time: { type: String, required: [true, "Name is required"] },
      },
      hellen: {
        opened: { type: String, required: [true, "Name is required"] },
        time: { type: String, required: [true, "Name is required"] },
      },
    },
    code: {
      watchtrailer: {
        opened: { type: String, required: [true, "Name is required"] },
        time: { type: String, required: [true, "Name is required"] },
      },
      usersapp: {
        opened: { type: String, required: [true, "Name is required"] },
        time: { type: String, required: [true, "Name is required"] },
      },
      barbershop: {
        opened: { type: String, required: [true, "Name is required"] },
        time: { type: String, required: [true, "Name is required"] },
      },
      moviegallery: {
        opened: { type: String, required: [true, "Name is required"] },
        time: { type: String, required: [true, "Name is required"] },
      },
      webstudio: {
        opened: { type: String, required: [true, "Name is required"] },
        time: { type: String, required: [true, "Name is required"] },
      },
      kapusta: {
        opened: { type: String, required: [true, "Name is required"] },
        time: { type: String, required: [true, "Name is required"] },
      },
      hellen: {
        opened: { type: String, required: [true, "Name is required"] },
        time: { type: String, required: [true, "Name is required"] },
      },
    },
  },
  { versionKey: false }
);

const Result = model("result", cvResultSchema);

module.exports = {
  Result,
};

// const cvResultSchema = new Schema(
//   {
//     watched: {
//       type: String,
//       required: [true, "Name is required"],
//     },
//     code: {
//       type: String,
//       required: [true, "Name is required"],
//     },
//   },
//   { versionKey: false }
// );

// const Result = model("result", cvResultSchema);

// module.exports = {
//   Result,
// };
