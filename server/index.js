const app = require('./app');
const mongoose = require('mongoose');
const config = require('./config');

const connect = url => {
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500
  };
  return mongoose.connect(url, options);
};

const disconnect = () => {
  return mongoose.disconnect();
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

module.exports = { connect, disconnect };
