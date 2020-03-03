const router = require('express-promise-router')();
const { replyJson, replyNoContent } = require('../../server/response-handlers');
const { postService } = require('./service');


router.get(
  '/post/:id',
  async (request, reply) => {
    const { id } = request.params;
    const post = await postService.findById(id);
    replyJson(reply, post);
  },
);

router.get(
  '/post-history/:id',
  async (request, reply) => {
    const { id } = request.params;
    const post = await postService.findHistory(id);
    replyJson(reply, post);
  },
);

router.get(
  '/post-by-day',
  async (request, reply) => {
    const post = await postService.findByDay();
    replyJson(reply, post);
  },
);

router.get(
  '/post-edited-recently',
  async (request, reply) => {
    const posts = await postService.findEditedRecently();
    replyJson(reply, posts);
  },
);

router.post(
  '/user/:userId/group/:groupId/post',
  async (request, reply) => {
    const { userId, groupId } = request.params;
    const post = await postService.create({ userId, groupId }, request.body);
    replyJson(reply, post);
  },
);

router.put(
  '/post/:id',
  async (request, reply) => {
    const { id } = request.params;
    const post = await postService.update(id, request.body);
    replyJson(reply, post);
  },
);

router.delete(
  '/post/:id',
  async (request, reply) => {
    const { id } = request.params;
    await postService.remove(id);
    replyNoContent(reply);
  },
);

module.exports = {
  postRouter: router,
};
