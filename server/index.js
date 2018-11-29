const app = require('./app');
const mongoose = require('mongoose');
const config = require('./config');

const connect = () => {
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500
  };
  mongoose.connect(config.db, options);
};

const disconnect = done => {
  mongoose.disconnect(done);
};

const listen = () => {
  app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`);
  });
};

connect();
mongoose.connection.once('open', listen);
mongoose.connection.on('error', console.log);

module.exports = { connect, disconnect };
