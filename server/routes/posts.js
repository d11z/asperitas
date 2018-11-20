const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', (req, res, next) => {
  Post.find()
    .then(posts => {
      res.json(posts);
    })
    .catch(next);
});

module.exports = router;
