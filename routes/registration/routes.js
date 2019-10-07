const express = require('express');
const router = express.Router();

// Registration Route
router.post('/register', require('./register'));

// Login & LogOut
const loginLogout = require('./loginLogout')
router.post('/login', loginLogout.login)


module.exports = router