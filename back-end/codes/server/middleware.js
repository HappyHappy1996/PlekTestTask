const { mainRouter } = require('./routes');

function initRoutes(app) {
  app.use(mainRouter);
}

module.exports = {
  initRoutes,
};
