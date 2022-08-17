const { Result } = require("../models");
const { data } = require("./constants");
const { DB_ID } = process.env;

const updateCodeStats = async (value, name, time) => {
  const { fieldList } = data;
  try {
    if (name === fieldList.watch) {
      const result = value.code.watchtrailer.opened;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "code.watchtrailer.opened": updateResult,
            "code.watchtrailer.time": time,
          },
        }
      );
      return response;
    }
    if (name === fieldList.user_app) {
      const result = value.code.usersapp.opened;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "code.usersapp.opened": updateResult,
            "code.usersapp.time": time,
          },
        }
      );
      return response;
    }
    if (name === fieldList.barbershop) {
      const result = value.code.barbershop.opened;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "code.barbershop.opened": updateResult,
            "code.barbershop.time": time,
          },
        }
      );
      return response;
    }
    if (name === fieldList.movie_gallery) {
      const result = value.code.moviegallery.opened;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "code.moviegallery.opened": updateResult,
            "code.moviegallery.time": time,
          },
        }
      );
      return response;
    }
    if (name === fieldList.web_studio) {
      const result = value.code.webstudio.opened;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "code.webstudio.opened": updateResult,
            "code.webstudio.time": time,
          },
        }
      );
      return response;
    }
    if (name === fieldList.kapusta) {
      const result = value.code.kapusta.opened;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "code.kapusta.opened": updateResult,
            "code.kapusta.time": time,
          },
        }
      );
      return response;
    }
    if (name === fieldList.hellen) {
      const result = value.code.hellen.opened;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "code.hellen.opened": updateResult,
            "code.hellen.time": time,
          },
        }
      );
      return response;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = updateCodeStats;
