const eventsRepo = require('../../database/EventsRepository');
const seedsRepo = require('../../database/SeedsRepository');
const ThreatLevel = require('../../constants/ThreatLevels');

const EventsService = () => ({
  async getAll(sortField = 'seedId') {
    const events = await eventsRepo.getAll(sortField);
    const seeds = await seedsRepo.getAll();

    events.sort((a, b) => {
      if (sortField === 'seedId') {
        return Number(a[sortField]) >= Number(b[sortField]) ? 1 : -1;
      }

      return new Date(a[sortField]).getTime() >= new Date(b[sortField]).getTime() ? 1 : -1;
    });

    const seedMap = seeds.reduce((acc, seed) => {
      acc[seed.id] = seed;
      return acc;
    }, {});

    return events.map((event) => {
      return {
        ...event,
        threatLevel: ThreatLevel[Number(event.threatLevelCode)],
        seed: {
          ...seedMap[event.seedId],
        },
      };
    });
  },
});

module.exports = EventsService();
