const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Categories = db.define('categories', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'course_id'
  }
},
{
  timestamps: false
}
);

module.exports = Categories;