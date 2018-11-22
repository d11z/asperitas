const express = require('express');
const { localAuth } = require('../auth/local');
const { createAuthToken } = require('../auth/jwt');
const User = require('../models/user');
const router = express.Router();

router.post('/login', localAuth, (req, res) => {
  const token = createAuthToken(req.user);
  res.json({ token });
});

router.post('/register', (req, res, next) => {
  User.create({
    username: req.body.username,
    password: req.body.password
  })
    .then(user => {
      const token = createAuthToken(user);
      res.status(201).json({ token });
    })
    .catch(next);
});

module.exports = router;
