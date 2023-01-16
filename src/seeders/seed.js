const db = require('../utils/database');
const Users = require('../models/users.models');
const Courses = require('../models/courses.models');
const UsersCourses = require('../models/users-courses.models');
const Categories = require('../models/categories.models');
const Videos = require('../models/videos.models');

const users = [
  { firstName: 'Evelyn', lastName: 'Garrido', password: '1234', email: 'eve@gmail.com'},
  { firstName: 'Pepito', lastName: 'Rodriguez', password: '1234', email: 'pepito@gmail.com'},
  { firstName: 'Juanito', lastName: 'Perez', password: '1234', email: 'juanito@gmail.com'}
];

const courses = [
  {title: 'Python', description: 'Introducción a Python', instructor: 'Instructor01'},
  {title: 'Cocina', description: 'Conociendo la gastronomia chilena', instructor: 'Instructor03'},
  {title: 'Javascript', description: 'Javascript I', instructor: 'Instructor02'},
  {title: 'Primeros auxilios', description: 'Curaciones', instructor: 'Instructor04'},
  {title: 'Tecnicas de reciclaje', description: 'Cuidemos el planeta', instructor: 'Instructor05'}
];

const usersCourses = [
  {userId: 1, courseId: 1},
  {userId: 1, courseId: 2},
  {userId: 2, courseId: 3},
  {userId: 2, courseId: 4},
  {userId: 3, courseId: 4},
  {userId: 3, courseId: 5}
];

const categories = [
  {name: 'educación', courseId: 1 },
  {name: 'trabajo', courseId: 1 },
  {name: 'cocina', courseId: 3 },
  {name: 'entrenimiento', courseId: 3 },
  {name: 'educación', courseId: 2 },
  {name: 'financiero', courseId: 2 },
  {name: 'salud', courseId: 4 },
  {name: 'ocio', courseId: 5 },
  {name: 'entrenimiento', courseId: 5 },
];

const videos = [
  {title: 'Lenguajes de Programación: Python', url: 'https://www.ejemplo1.com', courseId: 1},
  {title: 'Como hacer un pastel de choclo', url: 'https://www.ejemplo3.com', courseId: 3},
  {title: 'Lenguajes de Programación: JS', url: 'https://www.ejemplo2.com', courseId: 2},
  {title: 'Quemaduras de primer nivel', url: 'https://www.ejemplo4.com', courseId: 4},
  {title: 'Aprende a separar los materiales', url: 'https://www.ejemplo5.com', courseId: 5},
]

db.sync({force: true})
  .then(()=>{
    console.log('iniciando');
    users.forEach((user)=> Users.create(user));

    setTimeout(()=>{
      courses.forEach((course)=> Courses.create(course));
    }, 100);

    setTimeout(()=>{
      usersCourses.forEach((userCourse)=> UsersCourses.create(userCourse));
    }, 150);

    setTimeout(()=>{
      categories.forEach((category)=> Categories.create(category));
    }, 160);

    setTimeout(()=>{
      videos.forEach((video)=> Videos.create(video));
    }, 170);

  })