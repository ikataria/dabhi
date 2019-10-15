const express = require('express')
const router = express.Router()
const tokenVerify = require('../common/tokenVerify')

router.post('/addpost', tokenVerify, require('./post/addPost'))
router.get('/getfrnds', tokenVerify, require('./connect/getfrnds'))
router.post('/editpost', tokenVerify, require('./post/editPost').edit)
router.post('/deletepost', tokenVerify, require('./post/editPost').delete)
router.post('/findpost', tokenVerify, require('./post/findPost'))

module.exports = router