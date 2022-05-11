const seedsData = require('./seeds.json');

const SeedsRepository = () => ({
  async getAll() {
    return new Promise((resolve) => resolve(seedsData));
  },
});

module.exports = SeedsRepository();
