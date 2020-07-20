const { Sequelize } = require('sequelize');

const sequelize  = new Sequelize('postgres://postgres:postgres@localhost:5432/sequelize_app')

async function init () {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
init()

exports.sequelize  = sequelize
