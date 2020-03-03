const { PostModel } = require('./post-model');

function findById(id) {
  return PostModel.findById(id);
}

function findWithHistory(id) {
  return PostModel.findById(id)
    .populate('postHistory');
}

function findByDay() {
  return PostModel.aggregate([
    {
      $group: {
        _id: {
          year: { $year: '$created_at' },
          month: { $month: '$created_at' },
          day: { $dayOfMonth: '$created_at' },
          author: { author: '$author' },
        },
        count: { $sum: 1 },
      },
    },
  ]);
}

function findEditedInPeriod(periodStart, periodEnd) {
  return PostModel.find({
    edited_at: {
      $gte: periodStart,
      $lt: periodEnd,
    },
  })
    .sort({ author: 1 });
}

function create(post) {
  const postToSave = new PostModel(post);
  return postToSave.save();
}

function update(id, post) {
  return PostModel.update(post);
}

function removeById(id) {
  return PostModel.remove({ id });
}

module.exports = {
  postDao: {
    findById,
    findWithHistory,
    findByDay,
    findEditedInPeriod,
    create,
    update,
    removeById,
  },
};
