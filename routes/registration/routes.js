const express = require('express');
const router = express.Router();
const tokenVerify = require('../common/tokenVerify')

// Registration Route
router.post('/register', require('./register'));

//verifyOTP
router.post('/verifyOTP', tokenVerify, require('./verifyOTP'))

// Login & LogOut
router.post('/login', require('./loginLogout').login)
router.post('/logout', tokenVerify, require('./loginLogout').logout)



module.exports = router