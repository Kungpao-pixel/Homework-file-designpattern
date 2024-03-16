const { getAllMovies, createMovie, updateMovie, deleteMovie, upload } = require("../models/movies.model");


async function getMovies(req, res) {
    try {
        const {rows} = await getAllMovies();

        res.json({data: rows})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

async function addMovie(req, res) {
    try {
        const movieData = req.body;
        const newMovie = await createMovie(movieData);
        res.status(201).json({ data: newMovie });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function modifyMovie(req, res) {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedMovie = await updateMovie(id, updatedData);
        res.json({ data: updatedMovie });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function removeMovie(req, res) {
    try {
        const { id } = req.params;
        const deletedMovie = await deleteMovie(id);
        if (!deletedMovie) {
            res.status(404).json({ message: "Movie not found" });
            return;
        }
        res.json({ message: "Movie deleted successfully", data: deletedMovie });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function uploadPhoto(req, res) {
    const file = req.file;
    const { id } = req.params;

    if (!file) {
        return res.status(400).json({
            msg: 'Wrong file input',
        })
    }
    try {
        const result = await upload(id, file.filename)
        res.status(201).json({ image })
    } catch (error) {
        res.status(500).json({ error })
    }
}

module.exports = { getMovies, addMovie, modifyMovie, removeMovie, uploadPhoto }