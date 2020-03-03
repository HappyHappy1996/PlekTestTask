const { initServer } = require('./server/http-server');
const { initDbConnection } = require('./db/connection');
const { groupService } = require('./core/group/service');
const { logger } = require('./shared/logger');

async function initHttpServer() {
  await initDbConnection();

  const internalPort = 3000;
  const server = await initServer(internalPort);

  await groupService.ensurePublicGroupExists();

  logger.info(`Service "${process.env.APPLICATION_ID}" started listening on ${internalPort} port.`);

  return server;
}

module.exports = {
  initHttpServer,
};
