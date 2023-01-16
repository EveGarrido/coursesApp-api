const CoursesService = require('../services/courses.services');

const getAllCourses = async (req, res)=>{
  try {
    const result = await CoursesService.getAll();
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getAllCoursesWithCategoriesAndVideos = async (req, res)=>{
  try {
    const result = await CoursesService.getCategoriesAndVideos();
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createCourse = async (req, res)=>{
  try {
    const newCourse = req.body;
    const result = await CoursesService.create(newCourse);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const updateCourse = async (req, res)=>{
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await CoursesService.update(field, id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = { 
  getAllCourses,
  getAllCoursesWithCategoriesAndVideos,
  createCourse,
  updateCourse
};