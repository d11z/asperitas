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
    return res.status(403).json({ success: false, errors });
  }

  try {
    const { oldpassword, newpassword } = req.body;
    if (oldpassword === newpassword) {
      return res.status(403).json({
        success: false,
        message: 'Old and new passwords cannot be the same'
      });
    }
    const token = jwt.decode(req.headers.authorization.split(' ')[1]);
    const {
      user: { id: userId }
    } = token;

    if (!userId) {
      return res
        .status(401)
        .json({ success: false, message: 'Authentication error' });
    }

    const user = await User.findOne({ _id: userId });
    const doPasswordsMatch = await user.isValidPassword(oldpassword);
    if (!doPasswordsMatch) {
      return res
        .status(403)
        .json({ success: false, message: 'Passwords do not match' });
    }
    user.password = newpassword;
    await user.save();
    return res.status(200).json({
      success: true,
      message: 'Password change successful'
    });
  } catch (err) {
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
