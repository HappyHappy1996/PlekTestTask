const moment = require('moment');
const { postDao } = require('./dao');
const { postHistoryDao } = require('./post-history-dao');

/**
 * @param {string} id
 * @returns {Promise}
 */
function findById(id) {
  return postDao.findById(id);
}

/**
 * @param {string} id
 * @returns {Promise}
 */
function findHistory(id) {
  return postDao.findWithHistory(id);
}

function findByDay() {
  return postDao.findByDay();
}

function findEditedRecently() {
  const periodStart = moment().startOf('month').subtract(1, 'month').toDate();
  const periodEnd = moment().startOf('month').toDate();

  return postDao.findEditedInPeriod(periodStart, periodEnd);
}

function create({ userId, groupId }, post) {
  const builtPost = build({
    ...post,
    author: userId,
    group: groupId,
  });

  return postDao.create(builtPost);
}

async function update(id, post) {
  const postInDb = await postDao.findById(id);
  const postHistory = await postHistoryDao.create(build(postInDb));

  // TODO: need to reuse build function somehow
  postInDb.message = post.message;
  postInDb.edited_at = new Date();
  postInDb.postHistory.push(postHistory);

  return postInDb.save();
}

function build(post) {
  return {
    message: post.message,
    author: post.author,
    group: post.group,
    postHistory: post.postHistory && post.postHistory.length ? post.postHistory : [],
  };
}

/**
 * @param {string} id
 * @returns {Promise}
 */
function remove(id) {
  return postDao.removeById(id);
}

module.exports = {
  postService: {
    findById,
    findHistory,
    findByDay,
    findEditedRecently,
    create,
    update,
    remove,
  },
};
