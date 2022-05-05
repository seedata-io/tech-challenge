const seedsData = require('../../database/SeedsReposiory');

const SeedsService = () => ({
  getAll() {
    return seedsData.getAll();
  }
});

module.exports = SeedsService();
