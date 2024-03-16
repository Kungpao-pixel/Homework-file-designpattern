const pool = require("../config/db");

async function getAllUsers (){
    try {
      const result = await pool.query(
        `SELECT * FROM users`
      );
      return result 
    } catch (error) {
        throw(error)
    }
};

async function createUser(userData) {
    try {
        const result = await pool.query(
            `INSERT INTO users (id, email, gender, role) VALUES ($1, $2, $3, $4) RETURNING *`,
            [userData.id, userData.email, userData.gender, userData.role]
        );
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

async function updateUser(updatedData) {
    try {
        const result = await pool.query(`
        UPDATE users SET email='hahahahihihi@gmail.com', gender='Female', role='Supervisor' WHERE id=102 RETURNING *`
        )
    } catch (error) {
        throw(error)
    }
}

async function deleteUser() {
    try {
        const result = await pool.query(
            `DELETE FROM users WHERE id =102 RETURNING *`,
        );

        return result;
    } catch (error) {
        throw error;
    }
}



module.exports = { getAllUsers, createUser, updateUser, deleteUser }