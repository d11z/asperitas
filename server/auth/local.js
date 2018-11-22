const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const User = require('../models/user');

const localStrategy = new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({ username });
    if (!user) return done(null, false, { message: 'User not found' });

    const valid = await user.isValidPassword(password);
    if (!valid) return done(null, false, { message: 'Invalid password' });

    return done(null, user.toJSON());
  } catch (err) {
    done(err);
  }
});

const localAuth = passport.authenticate('local', { session: false });

module.exports = { localStrategy, localAuth };
