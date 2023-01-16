const UsersCourses = require('../models/users-courses.models');

class UsersCoursesServices {
  static async addCourse(newCourse){
    try {
      const result = await UsersCourses.create(newCourse);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsersCoursesServices;