const router = require('express-promise-router')();
const { replyJson } = require('../../server/response-handlers');

router.get(
  '/dummy',
  async (request, reply) => {
    replyJson(reply, { hello: 'friend' });
  },
);

module.exports = {
  dummyRouter: router,
};
