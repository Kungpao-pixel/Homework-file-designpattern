const router = require('express').Router();
const movieRoute = require('./movie.route')
const userRoute = require('./user.route')

router.use('/movies', movieRoute)
router.use('/users', userRoute)


module.exports = router