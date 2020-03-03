const { groupDao } = require('./dao');
const { PUBLIC_GROUP_NAME } = require('./constants');

/**
 * @param {string} id
 * @returns {Promise}
 */
function findById(id) {
  return groupDao.findById(id);
}

function ensurePublicGroupExists() {
  const publicGroup = { name: PUBLIC_GROUP_NAME };
  return groupDao.findOrCreate(PUBLIC_GROUP_NAME, publicGroup);
}

function create(group) {
  return groupDao.create(group);
}

function update(id, group) {
  return groupDao.update(id, group);
}

/**
 * @param {string} id
 * @returns {Promise}
 */
function remove(id) {
  return groupDao.removeById(id);
}

module.exports = {
  groupService: {
    findById,
    ensurePublicGroupExists,
    create,
    update,
    remove,
  },
};
