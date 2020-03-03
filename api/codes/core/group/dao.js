const { GroupModel } = require('./group-model');

function findById(id) {
  return GroupModel.findById(id);
}

function count() {
  return GroupModel.countDocuments();
}

function findOrCreate(name, group) {
  return GroupModel.findOneAndUpdate({ name }, group, { upsert: true });
}

function create(group) {
  const groupToSave = new GroupModel(group);
  return groupToSave.save();
}

function update(id, group) {
  return GroupModel.update(group);
}

function removeById(id) {
  return GroupModel.remove({ id });
}

module.exports = {
  groupDao: {
    findById,
    count,
    findOrCreate,
    create,
    update,
    removeById,
  },
};
