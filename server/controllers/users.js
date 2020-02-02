const { body, validationResult } = require('express-validator/check');
const { login, createAuthToken } = require('../auth');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.login = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }

  login(req, res, next);
};

exports.register = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }

  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    const token = createAuthToken(user.toJSON());
    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

exports.changePassword = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(403).json({ errors });
  }

  try {
    const { oldpassword, newpassword } = req.body;
    const token = jwt.decode(req.headers.authorization.split(' ')[1]);
    const {
      user: { id: userId }
    } = token;
    const user = User.findOne({ _id: userId });
    // TODO Implement the rest of the logic
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.validate = method => {
  if (method === 'changepassword') {
    // We only test the new password since the old one had to be
    // tested before
    return [
      body('newpassword')
        .exists()
        .withMessage('is required')

        .isLength({ min: 1 })
        .withMessage('cannot be blank')

        .isLength({ min: 8 })
        .withMessage('must be at least 8 characters long')

        .isLength({ max: 72 })
        .withMessage('must be at most 72 characters long')
    ];
  }

  const errors = [
    body('username')
      .exists()
      .withMessage('is required')

      .isLength({ min: 1 })
      .withMessage('cannot be blank')

      .isLength({ max: 32 })
      .withMessage('must be at most 32 characters long')

      .custom(value => value.trim() === value)
      .withMessage('cannot start or end with whitespace')

      .matches(/^[a-zA-Z0-9_-]+$/)
      .withMessage('contains invalid characters'),

    body('password')
      .exists()
      .withMessage('is required')

      .isLength({ min: 1 })
      .withMessage('cannot be blank')

      .isLength({ min: 8 })
      .withMessage('must be at least 8 characters long')

      .isLength({ max: 72 })
      .withMessage('must be at most 72 characters long')
  ];

  if (method === 'register') {
    errors.push(
      body('username').custom(async username => {
        const exists = await User.countDocuments({ username });
        if (exists) throw new Error('already exists');
      })
    );
  }

  return errors;
};
