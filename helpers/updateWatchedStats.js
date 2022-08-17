const { Result } = require("../models");
const { data } = require("./constants");
const { DB_ID } = process.env;

const updateWatchedStats = async (value, name, time) => {
  const { fieldList } = data;
  try {
    if (name === fieldList.watch) {
      const result = value.watched.watchtrailer;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "watched.watchtrailer": updateResult,
          },
        }
      );
      return response;
    }
    if (name === fieldList.user_app) {
      const result = value.watched.usersapp;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "watched.usersapp": updateResult,
          },
        }
      );
      return response;
    }
    if (name === fieldList.barbershop) {
      const result = value.watched.barbershop;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "watched.barbershop": updateResult,
          },
        }
      );
      return response;
    }
    if (name === fieldList.movie_gallery) {
      const result = value.watched.moviegallery;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "watched.moviegallery": updateResult,
          },
        }
      );
      return response;
    }
    if (name === fieldList.web_studio) {
      const result = value.watched.webstudio;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "watched.webstudio": updateResult,
          },
        }
      );
      return response;
    }
    if (name === fieldList.kapusta) {
      const result = value.watched.kapusta;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "watched.kapusta": updateResult,
          },
        }
      );
      return response;
    }
    if (name === fieldList.hellen) {
      const result = value.watched.hellen;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "watched.hellen": updateResult,
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
