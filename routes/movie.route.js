const router = require('express').Router();

const { getMovies, addMovie, modifyMovie, removeMovie, uploadPhoto } = require('../controllers/movies.controller');
const multer = require('../middleware/multer');

router.get('/', getMovies)
router.post('/', addMovie)
router.put('/:id', modifyMovie)
router.delete('/:id', removeMovie)
router.patch('/upload/:id', multer(),uploadPhoto)

module.exports = router