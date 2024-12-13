const config = require('../config/db');

const datatype = require('sequelize');
const sequelize = new dataType(
    config.DB, 
    config.USER, 
    config.PASSWORD, 
    {
        host: config.HOST,
        dialect: config.dialect
    }
);

const db = {};

db.dataType = dataType;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, dataType);

module.exports = db;