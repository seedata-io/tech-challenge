const eventData = require('./events.json');

const EventsRepository = () => ({
  async getAll(sortField) {
    return new Promise((resolve) => resolve(eventData));
  },
});

module.exports = EventsRepository();
