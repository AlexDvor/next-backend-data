const { Result } = require("../models");
const { data } = require("./constants");
const { DB_ID } = process.env;

const updateWatchedStats = async (value, name, time) => {
  const { fieldList } = data;
  try {
    if (name === fieldList.watch) {
      const result = value.watched.watchtrailer.opened;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "watched.watchtrailer.opened": updateResult,
            "watched.watchtrailer.time": time,
          },
        }
      );
      return response;
    }
    if (name === fieldList.user_app) {
      const result = value.watched.usersapp.opened;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "watched.usersapp.opened": updateResult,
            "watched.usersapp.time": time,
          },
        }
      );
      return response;
    }
    if (name === fieldList.barbershop) {
      const result = value.watched.barbershop.opened;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "watched.barbershop.opened": updateResult,
            "watched.barbershop.time": time,
          },
        }
      );
      return response;
    }
    if (name === fieldList.movie_gallery) {
      const result = value.watched.moviegallery.opened;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "watched.moviegallery.opened": updateResult,
            "watched.moviegallery.time": time,
          },
        }
      );
      return response;
    }
    if (name === fieldList.web_studio) {
      const result = value.watched.webstudio.opened;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "watched.webstudio.opened": updateResult,
            "watched.webstudio.time": time,
          },
        }
      );
      return response;
    }
    if (name === fieldList.kapusta) {
      const result = value.watched.kapusta.opened;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "watched.kapusta.opened": updateResult,
            "watched.kapusta.time": time,
          },
        }
      );
      return response;
    }
    if (name === fieldList.hellen) {
      const result = value.watched.hellen.opened;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "watched.hellen.opened": updateResult,
            "watched.hellen.time": time,
          },
        }
      );
      return response;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = updateWatchedStats;
