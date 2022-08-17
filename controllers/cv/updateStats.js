const { Result } = require("../../models");
const { data } = require("../../helpers/constants");
const { DB_ID } = process.env;
const updateWatchedStats = require("../../helpers/updateWatchedStats");
const updateCodeStats = require("../../helpers/updateCodeStats");

const updateStats = async (req, res, next) => {
  const { sectionList } = data;
  try {
    const { section, app, time } = req.query;
    const dataId = await Result.findById(DB_ID);

    if (section === sectionList.w) {
      const result = await updateWatchedStats(dataId, app);
      if (result) {
        res.json({
          data: "watched",
        });
      }
    }
    if (section === sectionList.c) {
      const result = await updateCodeStats(dataId, app, time);
      if (result) {
        res.json({
          data: "code",
        });
      }
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
