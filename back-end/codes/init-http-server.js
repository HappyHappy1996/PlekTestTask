const { initServer } = require('./server/http-server');
const { logger } = require('./shared/logger');

async function initHttpServer() {
  const internalPort = 3000;
  const server = await initServer(internalPort);

  logger.info(`Service "${process.env.APPLICATION_ID}" started listening on ${internalPort} port.`);

  return server;
}

module.exports = {
  initHttpServer,
};
