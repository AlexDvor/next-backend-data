const { Result } = require("../../models");

const addCodeResult = async (req, res, next) => {
  try {
    const id = "62fbea34bccc2826e3218570";
    const dataId = await Result.findById(id);
    const quantity = dataId.code;
    const result = Number(quantity) + 1;
    const response = await Result.findByIdAndUpdate(id, { code: result });
    if (response) res.json({ data: "OK" });
  } catch (error) {
    next(error);
  } finally {
  }
};

module.exports = addCodeResult;
