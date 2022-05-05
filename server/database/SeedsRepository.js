const seedsData = require('./seeds.json');

const SeedsRepository = () => ({
  async getAll() {
    return new Promise((resolve) => resolve(seedsData));
  },
  async getById(id) {
    return new Promise((resolve) => resolve(seedsData[0]));
  }
});

module.exports = SeedsRepository();
