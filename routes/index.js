const express = require('express')
const router = express.Router()

// const registration =

router.use('/registration', require('./registration/routes'))
router.use('/user', require('./user/routes'))

module.exports = router