const eventData = require('./events.json');

const EventsRepository = () => ({
  async getAll() {
    return new Promise((resolve) => resolve(eventData));
  },
  async getById(id) {
    return new Promise((resolve) => resolve(eventData[0]));
  }
});

module.exports = EventsRepository();
