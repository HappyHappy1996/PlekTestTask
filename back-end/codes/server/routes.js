const router = require('express-promise-router')();
const { replyJson } = require('./response-handlers');

router.get(
  '/companies',
  async (request, reply) => {
    replyJson(reply, { hello: 'friend' });
  },
);

module.exports = {
  mainRouter: router,
};
