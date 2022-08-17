const { Result } = require("../../models");

const addWatchResult = async (req, res, next) => {
  try {
    const id = "62fbea34bccc2826e3218570";
    const dataId = await Result.findById(id);
    // const quantity = dataId.watched;
    // const result = Number(quantity) + 1;
    // const response = await Result.findByIdAndUpdate(id, { watched: result });
    // if (response) res.json({ data: "OK" });
    const query = req.query;
    console.log("🚀 - query", query);
    res.json({
      data: dataId,
    });
  } catch (error) {
    next(error);
  } finally {
  }
};

module.exports = addWatchResult;
// http://localhost:4040/api/cv/watched?section=watched&time=fsdfsdfsdf
