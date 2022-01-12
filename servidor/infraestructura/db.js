const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('raveit', 'postgres', 'user', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;

