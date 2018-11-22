const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const jwt = require('jsonwebtoken');
const config = require('../config');

const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: config.jwt.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  (token, done) => done(null, token.user)
);

const createAuthToken = user => {
  return jwt.sign({ user }, config.jwt.secret, {
    expiresIn: config.jwt.expiry
  });
};

const jwtAuth = passport.authenticate('jwt', { session: false });

module.exports = { jwtStrategy, createAuthToken, jwtAuth };
