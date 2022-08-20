const { Result } = require("../../models");
const { data } = require("../../helpers/constants");
const { DB_ID, ADMIN_PASSWORD } = process.env;
const updateWatchedStats = require("../../helpers/updateWatchedStats");
const updateCodeStats = require("../../helpers/updateCodeStats");
const updateTotalViewPage = require("../../helpers/updateTotalViewPage");

const updateStats = async (req, res, next) => {
  const { sectionList } = data;
  try {
    const { section = "", app = "", time = "", password = "" } = req.query;
    const isAdmin = password === ADMIN_PASSWORD;
    const stats = await Result.findById(DB_ID);
    if (!isAdmin) {
      if (section === sectionList.w) {
        const result = await updateWatchedStats(stats, app, time);
        if (result) {
          res.json({
            data: "watched",
          });
        }
        return;
      }

      if (section === sectionList.c) {
        const result = await updateCodeStats(stats, app, time);
        if (result) {
          res.json({
            data: "code",
          });
        }
        return;
      }

      if (!section || !app || !time) {
        const result = await updateTotalViewPage(stats);
        if (result)
          res.json({
            message: "Updated total value",
          });

        return;
      }

      res.json({
        message: "Bad request",
      });
    }
    res.json({
      message: "You are admin ",
    });
  } catch (error) {
    next(error);
  } finally {
  }
};

module.exports = updateStats;
