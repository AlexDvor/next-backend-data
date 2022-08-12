const getCV = async (req, res, next) => {
  try {
    const path = require("path");
    const file = path.join(__dirname, "../../", "data", "cv.pdf");
    res.download(file);
  } catch (error) {
    next(error);
  }
};

module.exports = getCV;

// const path = require("path");
//   const file = path.join(__dirname, "../../", "data", "cv.pdf");
//   res.download(file, function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Success");
//     }
//   });
