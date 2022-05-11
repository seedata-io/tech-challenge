const eventsRepo = require('../../database/EventsRepository');
const seedsRepo = require('../../database/SeedsRepository');

const EventsService = () => ({
  async getAll(sortField = 'seedId') {
    return eventsRepo.getAll(sortField);
  },
});

module.exports = EventsService();
