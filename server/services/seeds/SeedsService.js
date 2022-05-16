const seedsData = require('../../database/SeedsRepository');

const SeedsService = () => ({
  getAll() {
    return seedsData.getAll();
  }
});

module.exports = SeedsService();
