const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('common'));

app.get('*', (req, res) => {
  res.end(req.originalUrl);
});

app.listen(8080);
