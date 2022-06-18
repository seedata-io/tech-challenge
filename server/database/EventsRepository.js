const eventData = require("./events.json");
const threatLevels = require("../constants/ThreatLevels");

const EventsRepository = () => ({
  async getAll(options) {
    const { query } = options;

    let queriedEventDate = {};

    if ("sort" in query) {
      queriedEventDate = eventData.sort(
        (
          { [query.sort.split(":")[0]]: a },
          { [query.sort.split(":")[0]]: b }
        ) => (query.sort.split(":")[1] === "asc" ? a - b : b - a)
      );
    }

    //enhance event data with threat
    const eventAndThreatData = queriedEventDate.map((event) => {
      return {
        ...event,
        threatLevel: threatLevels[event.threatLevelCode],
      };
    });

    return new Promise((resolve) => resolve(eventAndThreatData));
  },
});

module.exports = EventsRepository();
