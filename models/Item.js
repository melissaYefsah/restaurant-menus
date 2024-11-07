const {sequelize} = require('../db');
const { DataTypes,Model } = require('sequelize');

// TODO - create a Menu model

class Item extends Model{};

Item.init({
    name:DataTypes.STRING,
    image:DataTypes.STRING,
    price:DataTypes.INTEGER,
    vegetarian:DataTypes.BOOLEAN
},{
    sequelize : sequelize,
    modelName: "Item"
})

module.exports = {Item};