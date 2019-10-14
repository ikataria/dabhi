const express = require('express')
const router = express.Router()
const tokenVerify = require('../common/tokenVerify')

router.post('/addpost', tokenVerify, require('./addPost'))

module.exports = router