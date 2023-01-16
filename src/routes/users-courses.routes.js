const addCourseToUser = require('../controllers/users-courses.controller');
const { Router } = require('express');

const router = Router();

router.post('/course/to/user', addCourseToUser);

module.exports = router;