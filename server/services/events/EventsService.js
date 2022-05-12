const eventsRepo = require('../../database/EventsRepository');

const EventsService = () => ({
  async getAll(sortField = 'seedId') {
    return eventsRepo.getAll(sortField);
  },
});

module.exports = EventsService();
