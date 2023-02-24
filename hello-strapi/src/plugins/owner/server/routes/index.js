module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
];

module.exports = [
  {
    method: 'GET',
    path: '/find',
    handler: 'owner.find',
    config: {
      policies: [],
      auth: false,
    },
  },
];
