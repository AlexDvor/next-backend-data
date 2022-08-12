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
