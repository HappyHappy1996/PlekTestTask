const { userDao } = require('../user/dao');

async function populate() {
  const usersCount = await userDao.count();

  return usersCount > 0 ? Promise.resolve()
    : createDummyData();
}

function createDummyData() {
  const users = [
    {
      username: 'dummy-username1',
    },
    {
      username: 'dummy-username2',
    },
  ];

  return Promise.all(
    users.map((user) => userDao.create(user)),
  );
}

module.exports = {
  dummyService: {
    populate,
  },
};
