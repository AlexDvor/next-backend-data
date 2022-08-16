const { Cv } = require("../../models");
const fns = require("date-fns");

const getCV = async (req, res, next) => {
  try {
    const path = require("path");
    const file = path.join(__dirname, "../../", "data", "cv.pdf");
    res.download(file);
  } catch (error) {
    next(error);
  } finally {
    const { data } = req.body;
    const res = await Cv.create({
      data,
    });
  }
};

module.exports = getCV;
