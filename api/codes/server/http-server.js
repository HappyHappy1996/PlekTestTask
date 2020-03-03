const http = require('http');
const express = require('express');
const stoppable = require('stoppable');
const { initRoutes } = require('./middleware');

/**
 * @param port
 * @returns {Promise<server>}
 */
function initServer(port) {
  return new Promise((resolve, reject) => {
    const app = express();
    app.use(express.json());

    initRoutes(app);

    const httpServer = http.createServer(app);
    const server = stoppable(httpServer);

    server.listen(port, (err) => {
      if (err) reject(err);

      resolve(server);
    });
  });
}

module.exports = {
  initServer,
};
