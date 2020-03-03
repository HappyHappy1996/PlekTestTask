const { dummyRouter } = require('../core/dummy/routes');
const { userRouter } = require('../core/user/routes');
const { groupRouter } = require('../core/group/routes');
const { postRouter } = require('../core/post/routes');

function initRoutes(app) {
  app.use(dummyRouter);
  app.use(userRouter);
  app.use(groupRouter);
  app.use(postRouter);
}

module.exports = {
  initRoutes,
};
