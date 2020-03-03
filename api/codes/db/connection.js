const mongoose = require('mongoose');
const { logger } = require('../shared/logger');

const DB_CONFIG = {
  url: 'mongodb://mongo:27017',
};

function initDbConnection() {
  return mongoose.connect(DB_CONFIG.url, {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
    .catch((err) => {
      logger.error('Could not connect to DB. Error: ', err);
      throw err;
    });
}

module.exports = {
  initDbConnection,
};
