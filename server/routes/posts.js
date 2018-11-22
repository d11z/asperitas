const express = require('express');
const posts = require('../controllers/posts');
const comments = require('../controllers/comments');
const router = express.Router();

router.param('post', posts.load);
router.get('/', posts.list);
router.post('/', posts.create);
router.delete('/:post', posts.destroy);

router.post('/:post/comments', comments.create);
router.delete('/:post/comments/:comment', comments.destroy);

module.exports = router;
