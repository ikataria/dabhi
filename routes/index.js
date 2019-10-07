const express = require('express')
const router = express.Router()

// const registration =

router.use('/registration', require('./registration/routes'))

module.exports = router