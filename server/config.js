module.exports = {
  port: 8080,
  db: process.env.DATABASE_URL || 'mongodb://localhost/reddit'
};
