const fs = require("fs");
const path = require("path");
const { sequelize, DataTypes } = require("../configs/db.config");

function getModels() {
  let models = {};

  const modelPath = path.join(__dirname, ".");
  console.info(`get model info model path: = ${modelPath}`);
  fs.readdirSync(modelPath)
    .filter((file) => {
      return file.endsWith("model.js");
    })
    .forEach((file) => {
      console.info(`found model ${file}`);
      var model = require(path.join(modelPath, file))(sequelize, DataTypes);
      models[model.name] = model;
    });
  return models;
}

const models = getModels();

// const { userTest } = models;

sequelize.model = models;

module.exports = sequelize;
