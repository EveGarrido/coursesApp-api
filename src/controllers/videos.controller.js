const VideosServices = require('../services/videos.services');

const createVideo = async (req, res)=>{
  try {
    const newVideo = req.body;
    const result = await VideosServices.create(newVideo);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteVideo = async (req, res)=>{
  try {
    const { id } = req.params;
    const result = await VideosServices.delete(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = {
  createVideo,
  deleteVideo
};