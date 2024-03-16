const { getAllUsers, createUser, updateUser, deleteUser } = require('../models/users.model')


async function getUsers(req, res) {
    try {
        const {rows} = await getAllUsers();

        res.json({data: rows})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

async function addUser(req, res) {
    try {
        const userData = req.body;
        const newUser = await createUser(userData);
        res.status(201).json({ data: newUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function modifyUser(req, res) {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedUser = await updateUser(id, updatedData);
        res.json({ data: updatedUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function removeUser(req, res) {
    try {
        const { id } = req.params;
        const deletedUser = await deleteUser(id);
        if (!deletedUser) {
            res.status(404).json({ message: "Movie not found" });
            return;
        }
        res.json({ message: "User deleted successfully", data: deletedUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



module.exports = { getUsers, addUser, modifyUser, removeUser }