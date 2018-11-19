const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(morgan('common'));

connect()
  .on('error', console.log)
  .once('open', listen);

app.get('*', (req, res) => {
  res.end(req.originalUrl);
});

function listen() {
  app.listen(8080);
}

function connect() {
  const options = { useNewUrlParser: true };
  mongoose.connect('mongodb://localhost/reddit', options);
  return mongoose.connection;
}
