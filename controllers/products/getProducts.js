const DB = require("../../data/products.json");

const getProductsList = async (req, res, next) => {
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

module.exports = getProductsList;
