const { dummyRouter } = require('../core/dummy/routes');
const { userRouter } = require('../core/user/routes');

function initRoutes(app) {
  app.use(dummyRouter);
  app.use(userRouter);
}

module.exports = {
  initRoutes,
};
