const express = require('express')
const router = express.Router()

// const registration =

router.use('/registration', require('./registration/register'))

module.exports = router