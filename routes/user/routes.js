const express = require('express')
const router = express.Router()
const tokenVerify = require('../common/tokenVerify')

router.post('/addpost', tokenVerify, require('./post/addPost'))
router.post('/findpost', tokenVerify, require('./post/findPost'))
router.post('/editpost', tokenVerify, require('./post/editPost').edit)
router.post('/deletepost', tokenVerify, require('./post/editPost').delete)
router.get('/getpost', tokenVerify, require('./post/getPost'))

//  Connect
router.get('/getfrnds', tokenVerify, require('./connect/getfrnds'))
router.post('/sendrqst', tokenVerify, require('./connect/sendRequest'))
router.get('/rqstlist', tokenVerify, require('./connect/rqstApprove').rqstList)
router.post('/rqstapprove', tokenVerify, require('./connect/rqstApprove').rqstApprove)

module.exports = router