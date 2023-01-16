const UsersService = require('../services/users.services');

const getAllUsers = async (req, res)=>{
  try {
    const result = await UsersService.getAll();
    res.json(result);
  } catch (error) {
    res.status(200).json(error.message);
  }
};

const getUserById = async (req, res)=>{
  try {
    const { id } = req.params;
    const result = await UsersService.getById(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUserWithCourses = async (req, res)=>{
  try {
    const  { id } = req.params;
    const result = await UsersService.getWithCourses(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createUser = async (req, res)=>{
  try {
    const newUser = req.body;
    const result = await UsersService.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateUser = async (req, res)=>{
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await UsersService.update(field, id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserWithCourses,
  createUser,
  updateUser
}