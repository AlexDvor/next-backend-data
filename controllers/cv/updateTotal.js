const { Result } = require("../../models");
const { DB_ID } = process.env;

const updateTotalViewPage = require("../../helpers/updateTotalViewPage");

const updateTotal = async (req, res, next) => {
  try {
    const stats = await Result.findById(DB_ID);
    const result = await updateTotalViewPage(stats);
    if (result) {
      res.json({
        message: "Updated total value",
      });
    }
  } catch (error) {
    next(error);
  } finally {
  }
};

module.exports = updateTotal;
