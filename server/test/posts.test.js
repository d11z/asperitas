const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const { validUser, validPost } = require('./factories');
const User = mongoose.model('User');
const Post = mongoose.model('Post');

process.env.TEST_SUITE = 'posts';

describe('post endpoints', () => {
  let userData, user;
  let postData, post;
  let postData2, post2;
  const comment = { body: 'test comment' };

  beforeEach(async () => {
    userData = validUser();
    user = await new User(userData).save();

    postData = validPost(user.id, 'category1');
    post = await new Post(postData).save();

    postData2 = validPost(user.id, 'category2');
    post2 = await new Post(postData2).save();
  });

  describe('/posts', () => {
    test('returns all posts', done => {
      request(app)
        .get('/api/posts')
        .expect(res => {
          expect(res.body).toHaveLength(2);
        })
        .expect(200, done);
    });

    test('returns all posts in a category', done => {
      request(app)
        .get(`/api/posts/${post2.category}`)
        .expect(res => {
          expect(res.body).toHaveLength(1);
          expect(res.body[0].category).toEqual(post2.category);
        })
        .expect(200, done);
    });

    describe('secure endpoints', () => {
      let token = null;

      beforeEach(async () => {
        const res = await request(app).post('/api/login').send(userData);
        token = res.body.token;
      });

      test('rejects requests without auth token', done => {
        request(app)
          .post('/api/posts')
          .send(postData)
          .expect(401, done);
      });

      test('rejects posts with missing fields', done => {
        request(app)
          .post('/api/posts')
          .set('Authorization', `Bearer ${token}`)
          .expect(res => {
            expect(res.body.errors).toBeDefined();
            res.body.errors.forEach(err => {
              expect(err.msg).toContain('required');
            });
          })
          .expect(422, done);
      });

      test('rejects posts with blank title', done => {
        request(app)
          .post('/api/posts')
          .set('Authorization', `Bearer ${token}`)
          .send({ ...postData, title: '' })
          .expect(res => {
            expect(res.body.errors).toBeDefined();
            expect(res.body.errors[0].msg).toContain('blank');
          })
          .expect(422, done);
      });

      test('rejects posts with blank category', done => {
        request(app)
          .post('/api/posts')
          .set('Authorization', `Bearer ${token}`)
          .send({ ...postData, category: '' })
          .expect(res => {
            expect(res.body.errors).toBeDefined();
            expect(res.body.errors[0].msg).toContain('blank');
          })
          .expect(422, done);
      });

      test('rejects posts with invalid url', done => {
        request(app)
          .post('/api/posts')
          .set('Authorization', `Bearer ${token}`)
          .send({ ...postData, url: 'invalid' })
          .expect(res => {
            expect(res.body.errors).toBeDefined();
            expect(res.body.errors[0].msg).toContain('invalid URL');
          })
          .expect(422, done);
      });

      test('create new post', done => {
        request(app)
          .post('/api/posts')
          .set('Authorization', `Bearer ${token}`)
          .send(postData)
          .expect('Content-Type', /json/)
          .expect(res => {
            expect(res.body.title).toEqual(post.title);
            expect(res.body.url).toEqual(post.url);
            expect(res.body.category).toEqual(post.category);
            expect(res.body.author.username).toEqual(user.username);
            expect(res.body.author.id).toEqual(user.id);
            expect(res.body.score).toEqual(0);
            expect(res.body.votes).toHaveLength(0);
            expect(res.body.comments).toHaveLength(0);
          })
          .expect(201, done);
      });

      test('upvote post', done => {
        request(app)
          .get(`/api/posts/${post.id}/upvote`)
          .set('Authorization', `Bearer ${token}`)
          .expect('Content-Type', /json/)
          .expect(res => {
            expect(res.body.score).toEqual(1);
            expect(res.body.votes).toHaveLength(1);
            expect(res.body.votes[0].user).toEqual(user.id);
            expect(res.body.votes[0].vote).toEqual(1);
          })
          .expect(200, done);
      });

      test('downvote post', done => {
        request(app)
          .get(`/api/posts/${post.id}/downvote`)
          .set('Authorization', `Bearer ${token}`)
          .expect('Content-Type', /json/)
          .expect(res => {
            expect(res.body.score).toEqual(-1);
            expect(res.body.votes).toHaveLength(1);
            expect(res.body.votes[0].user).toEqual(user.id);
            expect(res.body.votes[0].vote).toEqual(-1);
          })
          .expect(200, done);
      });

      test('remove vote from post', done => {
        request(app)
          .get(`/api/posts/${post.id}/unvote`)
          .set('Authorization', `Bearer ${token}`)
          .expect('Content-Type', /json/)
          .expect(res => {
            expect(res.body.score).toEqual(0);
            expect(res.body.votes).toHaveLength(0);
          })
          .expect(200, done);
      });

      test('rejects comments with missing fields', done => {
        request(app)
          .post(`/api/posts/${post.id}`)
          .set('Authorization', `Bearer ${token}`)
          .expect(res => {
            expect(res.body.errors).toBeDefined();
            res.body.errors.forEach(err => {
              expect(err.msg).toContain('required');
            });
          })
          .expect(422, done);
      });

      test('comment on post', done => {
        request(app)
          .post(`/api/posts/${post.id}`)
          .set('Authorization', `Bearer ${token}`)
          .send(comment)
          .expect('Content-Type', /json/)
          .expect(res => {
            expect(res.body.comments).toHaveLength(1);
            expect(res.body.comments[0].body).toEqual(comment.body);
            expect(res.body.comments[0].author.username).toEqual(user.username);
            expect(res.body.comments[0].author.id).toEqual(user.id);
          })
          .expect(201, done);
      });
    });
  });
});
