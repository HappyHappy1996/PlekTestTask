const { userDao } = require('./dao');

/**
 * @param {string} id
 * @returns {Promise}
 */
function findById(id) {
  return userDao.findById(id);
}

function create(user) {
  return userDao.create(user);
}

function update(id, user) {
  return userDao.update(id, user);
}

/**
 * @param {string} id
 * @returns {Promise}
 */
function remove(id) {
  return userDao.removeById(id);
}

module.exports = {
  userService: {
    findById,
    create,
    update,
    remove,
  },
};
