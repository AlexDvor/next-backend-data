const getCV = async (req, res, next) => {
  const path = require("path");
  const file = path.join(__dirname, "../../", "data", "cv.pdf");
  res.download(file, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Success");
    }
  });
};

module.exports = getCV;

// const getCV = async (req, res, next) => {
//   try {
//     res.json({
//       data: DB,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports = getCV;

// const avatarsDir = path.join(__dirname, "../../", "public", "avatars");
