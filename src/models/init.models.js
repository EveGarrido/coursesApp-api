const Users = require('./users.models');
const UsersCourses = require('./users-courses.models');
const Courses = require('./courses.models');
const Categories = require('./categories.models');
const Videos = require('./videos.models');

const initModels = ()=>{
  UsersCourses.belongsTo(Users, {as: 'users', foreignKey: 'user_id'});
  Users.hasMany(UsersCourses, {as: 'users_courses', foreignKey: 'user_id'});

  UsersCourses.belongsTo(Courses, {as: 'courses', foreignKey: 'course_id'});
  Courses.hasMany(UsersCourses, {as: 'users_courses', foreignKey: 'course_id'});

  Categories.belongsTo(Courses, {as: 'courses', foreignKey: 'course_id'});
  Courses.hasMany(Categories, {as: 'categories', foreignKey: 'course_id'});

  Videos.belongsTo(Courses, {as: 'courses', foreignKey: 'course_id'});
  Courses.hasMany(Videos, {as: 'videos', foreignKey: 'course_id'});
};

module.exports = initModels;