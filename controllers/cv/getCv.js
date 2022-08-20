const { Cv } = require("../../models");
const { ADMIN_PASSWORD } = process.env;

const getCV = async (req, res, next) => {
  try {
    const path = require("path");
    const file = path.join(__dirname, "../../", "data", "cv.pdf");
    res.download(file);
  } catch (error) {
    next(error);
  } finally {
    const { password = "" } = req.query;
    const { data } = req.body;
    const isAdmin = password === ADMIN_PASSWORD;
    if (!isAdmin) {
      await Cv.create({
        data,
      });
    }
  }
};

module.exports = getCV;
