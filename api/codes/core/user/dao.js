const { UserModel } = require('./user-model');

function findById(id) {
  return UserModel.findById(id);
}

function count() {
  return UserModel.countDocuments();
}

function create(user) {
  const createdUser = new UserModel(user);
  return createdUser.save();
}

function update(id, user) {
  return UserModel.update(user);
}

function removeById(id) {
  return UserModel.remove({ id });
}

module.exports = {
  userDao: {
    findById,
    count,
    create,
    update,
    removeById,
  },
};
