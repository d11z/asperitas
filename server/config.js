module.exports = {
  port: 8080,
  db: {
    prod: process.env.DATABASE_URL || 'mongodb://localhost/reddit',
    test: process.env.TEST_DATABASE_URL || 'mongodb://localhost/reddit_test',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'development_secret',
    expiry: '7d'
  }
};
