const eventsRepo = require("../../database/EventsRepository");
const seedsRepo = require("../../database/SeedsRepository");

const EventsService = () => ({
  async getAll(options) {
    const events = await eventsRepo.getAll({
      query: options.query,
    });
    const seeds = await seedsRepo.getAll();

    const eventAndSeed = events.map((event) => {
      return {
        ...event,
        seed: seeds.find((seed) => seed.id === event.seedId),
      };
    });

    return eventAndSeed;
  },
});

module.exports = EventsService();
