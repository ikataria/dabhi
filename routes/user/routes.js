const express = require('express')
const router = express.Router()
const multer = require('multer')
const tokenVerify = require('../common/tokenVerify')

//-------------------------- Multer --------------------------------
router.post('/uploadPost', tokenVerify, require('./post/uploadPost'))
router.get('/getUploadPost', tokenVerify, require('./post/getUploadImage'))

// ----------------------- Connect ---------------------------------
router.get('/suggestfrnds', tokenVerify, require('./connect/suggestfrnds'))
router.post('/sendrqst', tokenVerify, require('./connect/sendRequest'))
router.get('/showfrnds', tokenVerify, require('./connect/showFrnds'))
router.get('/rqstlist', tokenVerify, require('./connect/rqstApprove').rqstList)
router.post('/rqstapprove', tokenVerify, require('./connect/rqstApprove').rqstApprove)

//  -----------------------  POST ----------------------------------
router.post('/addpost', tokenVerify, require('./post/addPost'))
router.post('/editpost', tokenVerify, require('./post/editPost').edit)
router.post('/deletepost', tokenVerify, require('./post/editPost').delete)
router.get('/getpost', tokenVerify, require('./post/getPost'))
router.get('/fetchNews', tokenVerify, require('./post/fetchNews'))
router.get('/fetchProfile/:DID', tokenVerify, require('./post/fetchProfile'))
router.get('/upvote/:postID', tokenVerify, require('./post/upvotes'))
router.post('/comment/:postID', tokenVerify, require('./post/addComment'))
router.post('/uploadVDO', tokenVerify, require('./post/youtube/uploadVDO'))


module.exports = router