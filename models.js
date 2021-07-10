const {Model, DataTypes } = require('sequelize');
const {sequelize} = require('./db')

class Doctor extends Model {}
Doctor.init({
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }

}, {sequelize, modelName: 'Doctor'})

class Student extends Model {}
Student.init({
    clinicID: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,

}, {sequelize, modelName: 'Student'})

class Pharmacist extends Model {}
Pharmacist.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,

}, {sequelize, modelName: 'Pharmacist'})

module.exports =  {Doctor, Student, Pharmacist};