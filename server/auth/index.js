const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../config');

exports.createAuthToken = user => {
  return jwt.sign({ user }, config.jwt.secret, {
    expiresIn: config.jwt.expiry
  });
};

exports.login = passport.authenticate('local', { session: false });

exports.requiresLogin = passport.authenticate('jwt', { session: false });

exports.post = {
  hasAuthorization: (req, res, next) => {
    if (req.post.author._id.equals(req.user.id)) return next();
    res.status(401).end();
  }
};

exports.comment = {
  hasAuthorization: (req, res, next) => {
    if (
      req.comment.author._id.equals(req.user.id) ||
      req.post.author._id.equals(req.user.id)
    )
      return next();
    res.status(401).end();
  }
};
