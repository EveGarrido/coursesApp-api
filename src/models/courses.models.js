const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Courses = db.define('courses', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  instructor: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  timestamps: false
});

module.exports = Courses;