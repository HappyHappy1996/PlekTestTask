const { initServer } = require('./server/http-server');
const { initDbConnection } = require('./db/connection');
const { logger } = require('./shared/logger');

async function initHttpServer() {
  await initDbConnection();

  const internalPort = 3000;
  const server = await initServer(internalPort);

  logger.info(`Service "${process.env.APPLICATION_ID}" started listening on ${internalPort} port.`);

  return server;
}

module.exports = {
  initHttpServer,
};
