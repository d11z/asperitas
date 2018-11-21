const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.param('id', (req, res, next, id) => {
  Post.findById(id)
    .then(post => {
      if (!post) throw new Error('Post not found');
      req.post = post;
      next();
    })
    .catch(next);
});

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

router.post('/:id', (req, res, next) => {
  const { post } = req;
  post
    .addComment(req.body.author, req.body.body)
    .then(updatedPost => res.status(201).json(updatedPost))
    .catch(next);
});

module.exports = router;
