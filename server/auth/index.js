const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../config');

exports.createAuthToken = user => {
  return jwt.sign({ user }, config.jwt.secret, {
    expiresIn: config.jwt.expiry
  });
};

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json(info);
    const token = this.createAuthToken(user);
    res.json({ token });
  })(req, res);
};

exports.jwtAuth = passport.authenticate('jwt', { session: false });

exports.postAuth = (req, res, next) => {
  if (req.post.author._id.equals(req.user.id)) return next();
  res.status(401).end();
};

exports.commentAuth = (req, res, next) => {
  if (
    req.comment.author._id.equals(req.user.id) ||
    req.post.author._id.equals(req.user.id)
  )
    return next();
  res.status(401).end();
};
