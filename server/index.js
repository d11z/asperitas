const app = require('./app');
const mongoose = require('mongoose');
const config = require('./config');

const connect = url => {
  return mongoose.connect(url, config.db.options);
};

const listen = () => {
  app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`);
  });
};

if (require.main === module) {
  connect(config.db.prod);
  mongoose.connection.once('open', listen);
  mongoose.connection.on('error', console.log);
}

module.exports = { connect };
