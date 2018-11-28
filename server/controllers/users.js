const { createAuthToken } = require('../auth');
const User = require('../models/user');

exports.login = (req, res) => {
  const token = createAuthToken(req.user);
  res.json({ token });
};

exports.register = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.count({ username });
    if (existingUser)
      return res.status(400).json({ message: 'Username already taken' });

    const user = await User.create({ username, password });
    const token = createAuthToken(user.toJSON());
    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};
