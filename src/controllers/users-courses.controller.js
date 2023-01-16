const UsersCoursesServices = require('../services/users-courses.services');

const addCourseToUser = async (req, res)=>{
  try {
    const newCourse = req.body;
    const result = await UsersCoursesServices.addCourse(newCourse);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = addCourseToUser;