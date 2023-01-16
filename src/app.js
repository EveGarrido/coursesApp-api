const express = require('express');
const db = require('./utils/database');
const initModels = require('./models/init.models');
const userRoutes = require('./routes/users.routes');
const coursesRouter = require('./routes/courses.routes');
const videosRouter = require('./routes/video.routes');
const categoriesRouter = require('./routes/categories.routes');
const usersCoursesRouter = require('./routes/users-courses.routes');


const app = express();

app.use(express.json());

const PORT = 9000;


db.authenticate()
.then(()=> console.log('autenticación exitosa'))
.catch((error)=> console.log(error));

initModels();
db.sync({force: false})
  .then(()=>console.log('Base de datos sincronizada OK'))
  .catch((error)=> console.log(error));

app.get('/', (req, res)=>{
  res.status(200).json({message: 'Bienvenido al servidor'})
});

app.use('/api/v1', userRoutes);
app.use('/api/v1', coursesRouter);
app.use('/api/v1', videosRouter);
app.use('/api/v1', categoriesRouter);
app.use('/api/v1', usersCoursesRouter);


app.listen(PORT, ()=>{
  console.log(`Servidor de API Cursos corriendo en el puerto ${PORT}`);
})
