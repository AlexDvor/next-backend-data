const { Result } = require("../../models");
const { data } = require("../../helpers/constants");
const { DB_ID } = process.env;
const updateWatchedStats = require("../../helpers/updateWatchedStats");
const updateCodeStats = require("../../helpers/updateCodeStats");
const updateTotalViewPage = require("../../helpers/updateTotalViewPage");

const updateStats = async (req, res, next) => {
  const { sectionList } = data;
  try {
    const { section, app, time } = req.query;
    const stats = await Result.findById(DB_ID);

    if (section === sectionList.w) {
      const result = await updateWatchedStats(stats, app, time);

      if (result) {
        res.json({
          data: "watched",
        });
      }
    }
    if (section === sectionList.c) {
      const result = await updateCodeStats(stats, app, time);
      if (result) {
        res.json({
          data: "code",
        });
      }
    }

    if (!section || !app || !time) {
      const result = await updateTotalViewPage(stats);
      res.json({
        data: result,
        message: "Empty",
      });
    }
  } catch (error) {
    next(error);
  } finally {
  }
};

module.exports = updateStats;

// const result = await Result.create({
//   code: {
//     watchtrailer: "0",
//     usersapp: "0",
//     moviegallery: "0",
//     webstudio: "0",
//     barbershop: "0",
//     kapusta: "0",
//     hellen: "0",
//   },
//   watched: {
//     watchtrailer: "0",
//     usersapp: "0",
//     moviegallery: "0",
//     webstudio: "0",
//     barbershop: "0",
//     kapusta: "0",
//     hellen: "0",
//   },
// });

// const result = await Result.create({
//   code: {
//     watchtrailer: { opened: "0", time: "0" },
//     usersapp: { opened: "0", time: "0" },
//     moviegallery: { opened: "0", time: "0" },
//     webstudio: { opened: "0", time: "0" },
//     barbershop: { opened: "0", time: "0" },
//     kapusta: { opened: "0", time: "0" },
//     hellen: { opened: "0", time: "0" },
//     hellen: { opened: "0", time: "0" },
//   },
//   watched: {
//     watchtrailer: { opened: "0", time: "0" },
//     usersapp: { opened: "0", time: "0" },
//     moviegallery: { opened: "0", time: "0" },
//     webstudio: { opened: "0", time: "0" },
//     barbershop: { opened: "0", time: "0" },
//     kapusta: { opened: "0", time: "0" },
//     hellen: { opened: "0", time: "0" },
//     hellen: { opened: "0", time: "0" },
//   },
// });
