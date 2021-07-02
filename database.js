const Sequelize = require('sequelize');

const user = 'postgres';
const password = 'febby89';
const host = 'localhost';
const database = 'testingpassport';

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
