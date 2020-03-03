const winston = require('winston');

const env = process.env.ENVIRONMENT_SLUG || 'local';

// info is the default level in winston
const level = env === 'local' ? 'debug' : 'info';
const format = env === 'local' ? winston.format.simple() : winston.format.json();

const logger = winston.createLogger({
  level,
  format,
  transports: [
    new winston.transports.Console(),
  ],
});

module.exports = {
  logger,
};
