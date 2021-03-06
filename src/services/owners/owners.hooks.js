const Web3 = require('web3');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [async (context) => {
      const foreignNodeURL = context.app.get('foreignNodeURL');
      const foreignWeb3 = new Web3(foreignNodeURL);
      const address = context.result.address;
      const balance = await foreignWeb3.eth.getBalance(address);
      context.result.balance = foreignWeb3.utils.fromWei(balance);
      return context;
    }],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
