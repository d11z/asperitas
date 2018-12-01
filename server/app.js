const express = require('express');
const morgan = require('morgan');
const expressValidator = require('express-validator');
const passport = require('passport');
const localStrategy = require('./auth/local');
const jwtStrategy = require('./auth/jwt');

const app = express();

app.use(express.json());
app.use(expressValidator());
app.use(morgan('common'));
app.use(passport.initialize());

passport.use(localStrategy);
passport.use(jwtStrategy);

require('./routes')(app);

module.exports = app;
