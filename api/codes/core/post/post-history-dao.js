const { PostHistoryModel } = require('./post-history-model');

function create(post) {
  const postToSave = new PostHistoryModel(post);
  return postToSave.save();
}

module.exports = {
  postHistoryDao: {
    create,
  },
};
