'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const clothesModel = require('./clothes/clothes.js');
const foodModel = require('./food/food.js');
const Collection = require('./data-collection.js');

const userModel = require('./users/users.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory';

const sequelize = new Sequelize(DATABASE_URL);
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  food: new Collection(food),
  clothes: new Collection(clothes),
  users: userModel,
};