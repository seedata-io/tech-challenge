const eventData = require('./events.json');
const threatLevels = require("../constants/ThreatLevels");

const EventsRepository = () => ({
  async getAll(sortField) {
    return new Promise((resolve) => resolve(eventData));
  },
  async getThreatLevels() {
    return new Promise((resolve) => resolve(threatLevels))
  },
});

module.exports = EventsRepository();
