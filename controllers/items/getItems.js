const DB = require("../../data/items.json");

const getItems = async (req, res, next) => {
  try {
    res.json({
      status: "success",
      code: 200,
      data: DB,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getItems;
