const seedsData = require('../../database/SeedsRepository');

const SeedsService = () => ({
  async getAll() {
    return seedsData.getAll();
  }
});

module.exports = SeedsService();
