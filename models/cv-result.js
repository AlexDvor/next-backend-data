const { Schema, model } = require("mongoose");

const cvResultSchema = new Schema(
  {
    watched: {
      watchtrailer: {
        type: String,
        required: [true, "Name is required"],
      },
      usersapp: {
        type: String,
        required: [true, "Name is required"],
      },
      barbershop: {
        type: String,
        required: [true, "Name is required"],
      },
      moviegallery: {
        type: String,
        required: [true, "Name is required"],
      },
      webstudio: {
        type: String,
        required: [true, "Name is required"],
      },
      kapusta: {
        type: String,
        required: [true, "Name is required"],
      },
      hellen: {
        type: String,
        required: [true, "Name is required"],
      },
    },
    code: {
      watchtrailer: {
        type: String,
        required: [true, "Name is required"],
      },
      usersapp: {
        type: String,
        required: [true, "Name is required"],
      },
      barbershop: {
        type: String,
        required: [true, "Name is required"],
      },
      moviegallery: {
        type: String,
        required: [true, "Name is required"],
      },
      webstudio: {
        type: String,
        required: [true, "Name is required"],
      },
      kapusta: {
        type: String,
        required: [true, "Name is required"],
      },
      hellen: {
        type: String,
        required: [true, "Name is required"],
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
