const Sequelize = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  operatorsAliases: false,
  logging: false,
  host: 'localhost',
});

module.exports = db;
