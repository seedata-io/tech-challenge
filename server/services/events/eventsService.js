const eventsRepo = require("../../database/EventsRepository")
const seedsRepo = require("../../database/SeedsRepository")

const EventsService = () => ({
  async getAll(sortField = "seedId") {
    const ascendingOrder = (a, b) => {
      if (a[sortField] > b[sortField]) {
        return 1;
      }
      if (a[sortField] < b[sortField]) {
        return -1;
      }
      return 0;
    }

    const descendingOrder = (a, b) => { 
      if (a[sortField] < b[sortField]) {
        return 1;
      }
      if (a[sortField] > b[sortField]) {
        return -1;
      }
      return 0;
    }

    const compare = (a, b) => {
      if (sortField === "seedId") {
        return ascendingOrder(a, b);
      }
      if (sortField === "createdDateTime") {
        return descendingOrder(a, b);
      }
    }

    const seedsPromise = seedsRepo.getAll();
    const seeds = await seedsPromise;
    const eventsPromise = eventsRepo.getAll(sortField);
    const events = await eventsPromise;
    const threatLevels = await eventsRepo.getThreatLevels()
    

    return events.map( event => ({
        ...event,
        threatLevel: threatLevels[event.threatLevelCode],
        seed: seeds.filter((seed) => seed.id === event.seedId)[0],
      })
    ).sort(compare);
  },
})

module.exports = EventsService()