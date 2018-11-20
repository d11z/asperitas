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

router.post('/', (req, res, next) => {
  Post.create({
    title: req.body.title,
    url: req.body.url,
    author: req.body.author,
    category: req.body.category
  })
    .then(post => res.status(201).json(post))
    .catch(next);
});

module.exports = router;
