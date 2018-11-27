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
