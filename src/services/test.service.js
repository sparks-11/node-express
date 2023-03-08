// requore model

const sequelize = require("../models");
const { userTest } = sequelize.model;
// const db = require("../configs/db.json");

const getAllTasks = (data) =>
  new Promise((resolve, reject) => {
    return userTest
      .create(data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

const createUser = async (data) => {
  try {
    const user = await userTest.create(data);
    return user;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllTasks,
  createUser,
};
