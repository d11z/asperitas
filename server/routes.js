const users = require('./controllers/users');
const posts = require('./controllers/posts');
const comments = require('./controllers/comments');

const { localAuth } = require('./auth/local');
const { jwtAuth } = require('./auth/jwt');

module.exports = app => {
  app.post('/login', localAuth, users.login);
  app.post('/register', users.register);

  app.param('post', posts.load);
  app.get('/posts', posts.list);
  app.post('/posts', jwtAuth, posts.create);
  app.delete('/posts/:post', jwtAuth, posts.destroy);

  app.post('/posts/:post', jwtAuth, comments.create);
  app.delete('/posts/:post/:comment', jwtAuth, comments.destroy);
};
