const { Result } = require("../../models");
const { data } = require("../../helpers/constants");
const { DB_ID } = process.env;
const updateWatchedDB = require("../../helpers/updateWatchedDB");
const updateCodeDB = require("../../helpers/updateCodeDB");

const addStatistics = async (req, res, next) => {
  const { sectionList } = data;
  try {
    const { section, app, time } = req.query;
    const dataId = await Result.findById(DB_ID);

    if (section === sectionList.w) {
      const result = await updateWatchedDB(dataId, app);
      if (result) {
        res.json({
          data: "Ok",
        });
      }
    }
    if (section === sectionList.c) {
      const result = await updateCodeDB(dataId, app, time);
      if (result) {
        res.json({
          data: "Ok",
        });
      }
    }
  } catch (error) {
    next(error);
  } finally {
  }
};

module.exports = addStatistics;

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
