const { body, validationResult } = require('express-validator/check');
const Post = require('../models/post');

exports.load = async (req, res, next, id) => {
  try {
    req.post = await Post.findById(id);
    if (!req.post) return res.status(404).json({ message: 'post not found' });
  } catch (err) {
    if (err.name === 'CastError')
      return res.status(400).json({ message: 'invalid post id' });
    return next(err);
  }
  next();
};

exports.show = async (req, res) => {
  const post = await Post.findByIdAndUpdate(
    req.post.id,
    { $inc: { views: 1 } },
    { new: true }
  );
  res.json(post);
};

exports.list = async (req, res) => {
  const category = req.params.category;
  const query = category ? { category } : {};
  const posts = await Post.find(query).sort('-score');
  res.json(posts);
};

exports.create = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }

  try {
    const { title, url, category } = req.body;
    const author = req.user.id;
    const post = await Post.create({ title, url, author, category });
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

exports.validate = [
  body('title')
    .exists()
    .withMessage('is required')

    .isLength({ min: 1 })
    .withMessage('cannot be blank')

    .isLength({ max: 100 })
    .withMessage('must be at most 100 characters long')

    .custom(value => value.trim() === value)
    .withMessage('cannot start or end with whitespace'),

  body('url')
    .exists()
    .withMessage('is required')

    .isURL()
    .withMessage('is invalid'),

  body('category')
    .exists()
    .withMessage('is required')

    .isLength({ min: 1 })
    .withMessage('cannot be blank')
];

exports.upvote = async (req, res) => {
  const post = await req.post.vote(req.user.id, 1);
  res.json(post);
};

exports.downvote = async (req, res) => {
  const post = await req.post.vote(req.user.id, -1);
  res.json(post);
};

exports.unvote = async (req, res) => {
  const post = await req.post.vote(req.user.id, 0);
  res.json(post);
};

exports.destroy = async (req, res) => {
  await req.post.remove();
  res.status(204).end();
};
