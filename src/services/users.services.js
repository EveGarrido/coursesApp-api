const Courses = require("../models/courses.models");
const UsersCourses = require("../models/users-courses.models");
const Users = require("../models/users.models");

class UsersService {
  //creada para pruebas
  static async getAll() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: {
          exclude: ["password"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  static async getWithCourses(id) {
    try {
      const result = await Users.findAll({
        where: { id },
        attributes: {
          exclude: ["password"],
        },
        include: {
          model: UsersCourses,
          as: "users_courses",
          attributes: ['id'],
          include: {
            model: Courses,
            as: "courses",
            attributes: ["title"],
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(user) {
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(field, id) {
    try {
      const result = await Users.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  
}

module.exports = UsersService;
