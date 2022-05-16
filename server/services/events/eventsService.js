const eventsRepo = require('../../database/EventsRepository');
const seedsRepo = require('../../database/SeedsRepository');
const seedsService = require('../seeds/SeedsService')
const threatLevels = require('../../constants/ThreatLevels')

const EventsService = () => ({
  async getAll(sortField = 'seedId', ascending = true) {
    const data = await eventsRepo.getAll(sortField)
    const seeds = await seedsService.getAll()
    return data.map((event) => {
      return {
        ...event,
        threatLevel: threatLevels[event.threatLevelCode],
        seed: seeds.find(seed => seed.id === event.seedId)
      }

    }).sort((event1, event2) => {
      if (ascending) {
        return event1[sortField] - event2[sortField]
      } else {
         return event2[sortField] - event1[sortField]
      }
    })
  },
});

module.exports = EventsService();
