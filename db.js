const {Sequelize}  = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/database.sqlite3'
})

module.exports = {sequelize}