const { Result } = require("../models");
const { data } = require("./constants");
const { DB_ID } = process.env;

const updateCodeDB = async (value, name, time) => {
  const { fieldList } = data;
  try {
    if (name === fieldList.watch) {
      const result = value.code.watchtrailer;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "code.watchtrailer": updateResult,
          },
        }
      );
      return response;
    }
    if (name === fieldList.user_app) {
      const result = value.code.usersapp;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "code.usersapp": updateResult,
          },
        }
      );
      return response;
    }
    if (name === fieldList.barbershop) {
      const result = value.code.barbershop;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "code.barbershop": updateResult,
          },
        }
      );
      return response;
    }
    if (name === fieldList.movie_gallery) {
      const result = value.code.moviegallery;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            "code.moviegallery": updateResult,
          },
        }
      );
      return response;
    }
    if (name === fieldList.web_studio) {
      const result = value.code.webstudio;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "code.webstudio": updateResult,
          },
        }
      );
      return response;
    }
    if (name === fieldList.kapusta) {
      const result = value.code.kapusta;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "code.kapusta": updateResult,
          },
        }
      );
      return response;
    }
    if (name === fieldList.hellen) {
      const result = value.code.hellen;
      const updateResult = Number(result) + 1;
      const response = await Result.updateOne(
        {
          _id: DB_ID,
        },
        {
          $set: {
            "code.hellen": updateResult,
          },
        }
      );
      return response;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = updateCodeDB;
