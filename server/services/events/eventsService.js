const eventsRepo = require('../../database/EventsRepository');
const seedsRepo = require('../../database/SeedsRepository');
const threats = require('../../constants/ThreatLevels')

const EventsService = () => ({
  async getAll(sortField = 'seedId') {
    const ascendingOrder = (a, b) => {
      if (a[sortField] > b[sortField]) return 1
      if (a[sortField] < b[sortField]) return -1
      return 0
    }
    const descendingOrder = (a, b) =>{
      if (a[sortField] > b[sortField]) return -1
      if (a[sortField] < b[sortField]) return 1
      return 0
    }
    const compare = (a, b) => {
      if (sortField === "seedId") return ascendingOrder(a, b);
      if (sortField === "createdDateTime") return descendingOrder(a, b);
    }

    const seedsPromise = seedsRepo.getAll();
    const eventsPromise = eventsRepo.getAll(sortField);
    const seeds = await seedsPromise
    const events = await eventsPromise

    return events.map( event => ({
       ...event,
       seed: seeds.filter(seed => seed.id === event.seedId)[0],
       threatLevel: threats[event.threatLevelCode]
      })
    ).sort(compare);
  },
});

module.exports = EventsService();
