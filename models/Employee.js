const Sequelize = require('sequelize');
const db = require('../config/database');

const Employee = db.define('employee', {
    fullName: {
        type: Sequelize.STRING
    },
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    birthDate: {
        type: Sequelize.DATE
    },
    gender: {
        type: Sequelize.STRING
    },
    salary: {
        type: Sequelize.INTEGER
    }
})

module.exports = Employee;