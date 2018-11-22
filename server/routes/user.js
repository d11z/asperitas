const express = require('express');
const { localAuth } = require('../auth/local');
const router = express.Router();
const users = require('../controllers/users');

router.post('/login', localAuth, users.login);
router.post('/register', users.register);

module.exports = router;
