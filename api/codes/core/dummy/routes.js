const router = require('express-promise-router')();
const { dummyService } = require('./service');
const { replyNoContent } = require('../../server/response-handlers');

router.get(
  '/dummy/create',
  async (request, reply) => {
    await dummyService.createDummyData();
    replyNoContent(reply);
  },
);

module.exports = {
  dummyRouter: router,
};
