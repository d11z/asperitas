const users = require('./controllers/users');
const posts = require('./controllers/posts');
const comments = require('./controllers/comments');
const { jwtAuth, postAuth, commentAuth } = require('./auth');

module.exports = app => {
  app.post('/login', users.validate(), users.login);
  app.post('/register', users.validate('register'), users.register);

  app.param('post', posts.load);
  app.get('/posts', posts.list);
  app.get('/posts/:category', posts.list);
  app.post('/posts', [jwtAuth, posts.validate], posts.create);
  app.delete('/posts/:post', [jwtAuth, postAuth], posts.destroy);
  app.get('/posts/:post/upvote', jwtAuth, posts.upvote);
  app.get('/posts/:post/downvote', jwtAuth, posts.downvote);
  app.get('/posts/:post/unvote', jwtAuth, posts.unvote);

  app.param('comment', comments.load);
  app.post('/posts/:post', [jwtAuth, comments.validate], comments.create);
  app.delete('/posts/:post/:comment', [jwtAuth, commentAuth], comments.destroy);

  app.get('*', (req, res) => {
    res.status(404).json({ message: 'not found' });
  });
};
