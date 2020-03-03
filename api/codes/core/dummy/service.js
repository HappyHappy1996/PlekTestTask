const { userDao } = require('../user/dao');
const { groupDao } = require('../group/dao');

async function populate() {
  const usersCount = await userDao.count();

  return usersCount > 0 ? Promise.resolve()
    : createDummyData();
}

async function createDummyData() {
  const users = [
    {
      username: 'dummy-username1',
    },
    {
      username: 'dummy-username2',
    },
  ];

  const groups = [
    {
      name: 'dummy-group1',
    },
  ];

  return Promise.all(
    ...users.map(userDao.create),
    ...groups.map(groupDao.create),
  );
}

module.exports = {
  dummyService: {
    populate,
    createDummyData,
  },
};
