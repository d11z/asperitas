const { createAuthToken } = require('../auth');
const { body, validationResult } = require('express-validator/check');
const User = require('../models/user');

exports.login = (req, res) => {
  const token = createAuthToken(req.user);
  res.json({ token });
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

exports.validate = (method) => {
  switch (method) {
    case 'register': {
      return [
        body('username')
          .exists()
          .withMessage('is required')

          .isLength({ min: 1 })
          .withMessage('cannot be blank')

          .isLength({ max: 32 })
          .withMessage('must be at most 32 characters long')

          .custom(value => value.trim() === value)
          .withMessage('cannot start or end with whitespace')

          .custom(async username => {
            const exists = await User.countDocuments({ username });
            if (exists) throw new Error('username already exists');
          }),

        body('password')
          .exists()
          .withMessage('is required')

          .isLength({ min: 8 })
          .withMessage('must be at least 8 characters long')

          .isLength({ max: 72 })
          .withMessage('must be at most 72 characters long')
      ];
    }
  }
};
