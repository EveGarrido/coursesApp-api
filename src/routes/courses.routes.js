const { Router } = require('express');
const {
  getAllCourses,
  getAllCoursesWithCategoriesAndVideos,
  createCourse,
  updateCourse
} = require('../controllers/courses.controller');

const router = Router();

router.get('/courses', getAllCourses);
router.get('/courses/categoriesandvideos', getAllCoursesWithCategoriesAndVideos);
router.post('/courses', createCourse);
router.put('/courses/:id', updateCourse);

module.exports = router;