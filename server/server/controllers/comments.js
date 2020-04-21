const { body, validationResult } = require('express-validator/check');

exports.load = async (req, res, next, id) => {
  try {
    req.comment = await req.post.comments.id(id);
    if (!req.comment) return next(new Error('comment not found'));
  } catch (err) {
    return next(err);
  }
  next();
};

exports.create = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }

  try {
    const post = await req.post.addComment(req.user.id, req.body.comment);
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

exports.validate = [
  body('comment')
    .exists()
    .withMessage('is required')

    .isLength({ min: 1 })
    .withMessage('cannot be blank')

    .isLength({ max: 2000 })
    .withMessage('must be at most 2000 characters long')
];

exports.destroy = async (req, res, next) => {
  try {
    const post = await req.post.removeComment(req.params.comment);
    res.json(post);
  } catch (err) {
    next(err);
  }
};
