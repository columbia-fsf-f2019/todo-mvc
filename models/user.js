const sequelize = require('../config');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
  email: DataTypes.STRING,
  password: DataTypes.STRING
});

User.sync();

module.exports = User;
