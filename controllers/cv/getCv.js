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
    const currentTime = fns.format(new Date(), "dd/MM/yy HH:mm");
    await Cv.create({
      data: currentTime,
    });
  }
};

module.exports = getCV;
