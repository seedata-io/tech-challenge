const eventsRepo = require('../../database/EventsRepository');

const EventsService = () => ({
  async getAll() {
    return eventsRepo.getAll();
  },
  async getById(id) {
    return eventsRepo.getById(id);
  }
});

module.exports = EventsService();
