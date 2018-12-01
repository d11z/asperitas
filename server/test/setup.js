const mongoose = require('mongoose');
const { connect } = require('../index');
const config = require('../config');

const clearDb = done => {
  mongoose.connection.dropDatabase();
  return done();
};

beforeEach(done => {
  if (mongoose.connection.readyState === 0) {
    connect(`${config.db.test}-${process.env.TEST_SUITE}`);
  }
  return clearDb(done);
});

afterEach(done => {
  mongoose.disconnect();
  return done();
});
