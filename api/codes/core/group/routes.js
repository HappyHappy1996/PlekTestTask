const router = require('express-promise-router')();
const { replyJson, replyNoContent } = require('../../server/response-handlers');
const { groupService } = require('./service');


router.get(
  '/group/:id',
  async (request, reply) => {
    const { id } = request.params;
    const group = await groupService.findById(id);
    replyJson(reply, group);
  },
);

router.post(
  '/group',
  async (request, reply) => {
    const group = await groupService.create(request.body);
    replyJson(reply, group);
  },
);

router.put(
  '/group/:id',
  async (request, reply) => {
    const { id } = request.params;
    const group = await groupService.update(id, request.body);
    replyJson(reply, group);
  },
);

router.delete(
  '/group/:id',
  async (request, reply) => {
    const { id } = request.params;
    await groupService.remove(id);
    replyNoContent(reply);
  },
);

module.exports = {
  groupRouter: router,
};
