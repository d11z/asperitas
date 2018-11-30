const faker = require('faker');

exports.validUser = () => ({
  username: faker.name.firstName(),
  password: 'password'
});

exports.validPost = author => ({
  title: faker.lorem.sentence(),
  url: faker.internet.url(),
  category: faker.lorem.word(),
  author
});
