const mongoose = require('mongoose');

function startConnection() {
  const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}` +
                `@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

  mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }).then(() => {
    logger.info('MongoDB Connected');
  }).catch((err) => {
    logger.error('MongoDB Connection Failed', err.message);
  });

  mongoose.connection.on('error', (err) => {
    logger.error('MongoDB error: ' + err.message);
  });
}

startConnection();

module.exports = mongoose;
