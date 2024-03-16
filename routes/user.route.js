const router = require('express').Router();

const { getUsers, addUser, modifyUser, removeUser } = require('../controllers/users.controller')


router.get('/', getUsers)
router.post('/', addUser)
router.put('/:id', modifyUser)
router.delete('/:id', removeUser)

module.exports = router