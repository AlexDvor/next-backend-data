const { Result } = require("../models");

const { DB_ID } = process.env;

const updateTotalViewPage = async (value) => {
  try {
    const result = value.total;
    const updateResult = Number(result) + 1;
    const response = await Result.updateOne(
      {
        _id: DB_ID,
      },
      {
        $set: {
          total: updateResult,
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

module.exports = updateTotalViewPage;
