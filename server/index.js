const express = require('express');

const app = express();

app.get('*', (req, res) => {
  res.end(req.originalUrl);
});

app.listen();
