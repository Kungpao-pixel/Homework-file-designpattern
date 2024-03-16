const pool = require("../config/db");

async function getAllMovies (){
    try {
      const result = await pool.query(
        `SELECT * FROM movies`
      );
      return result 
    } catch (error) {
        throw(error)
    }
};

async function createMovie(movieData) {
    try {
        const result = await pool.query(
            `INSERT INTO movies (id, title, genres, year) VALUES ($1, $2, $3, $4) RETURNING *`,
            [movieData.id, movieData.title, movieData.genres, movieData.year]
        );
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

async function updateMovie(updatedData) {
    try {
        const result = await pool.query(`
        UPDATE movies SET title='Kungpao Adventure', genres='Documentation', year=2021 WHERE id=101 RETURNING *`
        )
    } catch (error) {
        throw(error)
    }
}

async function deleteMovie(id, source) {
    try {
        const result = await pool.query(
            `DELETE FROM movies WHERE id =101 RETURNING *`,
            [id, source]
        );

        return result
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

async function upload(id, source) {
    try {
        console.log(id, source)
        const result = await pool.query(`
        UPDATE movies SET imageUrl=$1 WHERE id=$2,`
        [id, source])
    } catch (error) {
        throw(error)
    }
}

module.exports = { getAllMovies, createMovie, updateMovie, deleteMovie, upload }