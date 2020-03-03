const router = require('express-promise-router')();
const { replyJson, replyNoContent } = require('../../server/response-handlers');
const { userService } = require('./service');


router.get(
  '/user/:id',
  async (request, reply) => {
    const { id } = request.params;
    const user = await userService.findById(id);
    replyJson(reply, user);
  },
);

router.post(
  '/user',
  async (request, reply) => {
    const user = await userService.create(request.body);
    replyJson(reply, user);
  },
);

router.put(
  '/user/:id',
  async (request, reply) => {
    const { id } = request.params;
    const user = await userService.update(id, request.body);
    replyJson(reply, user);
  },
);

router.delete(
  '/user/:id',
  async (request, reply) => {
    const { id } = request.params;
    await userService.remove(id);
    replyNoContent(reply);
  },
);

module.exports = {
  userRouter: router,
};
