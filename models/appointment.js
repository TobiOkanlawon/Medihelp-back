'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Appointment.belongsTo(models.Student, { foreignKey: 'clinicID' });
    }
  };
  Appointment.init({
    day: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    month: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    year: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    hour: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    minute: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};