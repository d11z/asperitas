const users = require('./controllers/users');
const posts = require('./controllers/posts');
const comments = require('./controllers/comments');
const auth = require('./auth');

const { localAuth } = require('./auth/local');
const { jwtAuth } = require('./auth/jwt');

module.exports = app => {
  app.post('/login', auth.login, users.login);
  app.post('/register', users.register);

  app.param('post', posts.load);
  app.get('/posts', posts.list);
  app.get('/posts/:category', posts.list);
  app.post('/posts', auth.requiresLogin, posts.create);
  app.delete('/posts/:post', auth.requiresLogin, posts.destroy);

  app.post('/posts/:post', auth.requiresLogin, comments.create);
  app.delete('/posts/:post/:comment', auth.requiresLogin, comments.destroy);
};
