const request = require('supertest');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const app = require('../app');
const { connect, disconnect } = require('../index');
const config = require('../config');
const User = mongoose.model('User');

describe('auth endpoints', () => {
  const name = {
    nonExisting: 'new',
    existing: 'old',
    nonTrimmed: ' user ',
    long: 'a'.repeat(33),
  };
  const pass = {
    valid: 'password',
    wrong: 'incorrect',
    short: 'aaa',
    long: 'a'.repeat(73)
  };

  beforeAll(async () => {
    await connect(config.db.test);
  });

  beforeEach(async () => {
    const user = new User({ username: name.existing, password: pass.valid });
    await user.save();
  });

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
  });

  afterAll(async () => {
    await disconnect();
  });

  describe('/login', () => {
    test('rejects requests with no credentials', done => {
      request(app)
        .post('/login')
        .expect(422, done);
    });

    test('reject requests with incorrect name', done => {
      request(app)
        .post('/login')
        .send({ username: name.nonExisting, password: pass.valid })
        .expect(401, done);
    });

    test('reject requests with incorrect pass', done => {
      request(app)
        .post('/login')
        .send({ username: name.existing, password: pass.wrong })
        .expect(401, done);
    });

    test('returns a valid auth token', done => {
      request(app)
        .post('/login')
        .send({ username: name.existing, password: pass.valid })
        .expect('Content-Type', /json/)
        .expect(res => {
          const { token } = res.body;
          const payload = jwt.verify(token, config.jwt.secret);
          expect(payload.user.username).toEqual(name.existing);
        })
        .expect(200, done);
    });
  });

  describe('/register', () => {
    test('rejects requests with missing fields', done => {
      request(app)
        .post('/register')
        .expect(422, done);
    });

    test('rejects requests with blank name', done => {
      request(app)
        .post('/register')
        .send({ username: '', password: pass.valid })
        .expect(422, done);
    });

    test('rejects requests with blank password', done => {
      request(app)
        .post('/register')
        .send({ username: name.existing, password: '' })
        .expect(422, done);
    });

    test('rejects requests with non-trimmed name', done => {
      request(app)
        .post('/register')
        .send({ username: name.nonTrimmed, password: pass.valid })
        .expect(422, done);
    });

    test('rejects requests with name that is too long', done => {
      request(app)
        .post('/register')
        .send({ username: name.long, password: pass.valid })
        .expect(422, done);
    });

    test('rejects requests with password that is too short', done => {
      request(app)
        .post('/register')
        .send({ username: name.nonExisting, password: pass.short })
        .expect(422, done);
    });

    test('rejects requests with password that is too long', done => {
      request(app)
        .post('/register')
        .send({ username: name.nonExisting, password: pass.long })
        .expect(422, done);
    });

    test('rejects requests with existing name', done => {
      request(app)
        .post('/register')
        .send({ username: name.existing, password: pass.valid })
        .expect(422, done);
    });

    test('creates a new user and returns a valid auth token', done => {
      request(app)
        .post('/register')
        .send({ username: name.nonExisting, password: pass.valid })
        .expect('Content-Type', /json/)
        .expect(res => {
          const { token } = res.body;
          const payload = jwt.verify(token, config.jwt.secret);
          expect(payload.user.username).toEqual(name.nonExisting);
        })
        .expect(201, done);
    });
  });
});
