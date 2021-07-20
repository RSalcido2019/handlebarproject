const { Sequelize, DataTypes, Model } = require('sequelize');
const path = require('path');
const sequelize = require('../db');



class Restaurant extends Model {}

Restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING
}, {
    sequelize,
    timestamps: false,
});

module.exports = Restaurant;
