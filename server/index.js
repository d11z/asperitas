const express = require('express');

const app = express();

app.use(express.json());

app.get('*', (req, res) => {
  res.end(req.originalUrl);
});

app.listen();
