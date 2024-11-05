const path = require('path');
const { Sequelize, Model, DataTypes } = require("sequelize");

// TODO - connect to db via sequelize
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite"),
  });


module.exports = {
    sequelize,
    Model,
    DataTypes
};
