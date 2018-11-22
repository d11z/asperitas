const users = require('./controllers/users');
const posts = require('./controllers/posts');
const comments = require('./controllers/comments');

module.exports = app => {
  app.post('/login', users.login);
  app.post('/register', users.register);

  app.param('post', posts.load);
  app.get('/posts', posts.list);
  app.post('/posts', posts.create);
  app.delete('/posts/:post', posts.destroy);

  app.post('/posts/:post', comments.create);
  app.delete('/posts/:post/:comment', comments.destroy);
};
