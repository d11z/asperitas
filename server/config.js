module.exports = {
  port: 8080,
  db: process.env.DATABASE_URL || 'mongodb://localhost/reddit',
  jwt: {
    secret: process.env.JWT_SECRET || 'development_secret',
    expiry: '7d'
  }
};
