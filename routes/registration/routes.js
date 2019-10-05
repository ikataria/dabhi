const express = require('express');
const router = express.Router();

// Registration Route
router.post('/register', require('./register'));

module.exports = router