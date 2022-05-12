const eventsRepo = require("../../database/EventsRepository")
const seedsRepo = require("../../database/SeedsRepository")

const EventsService = () => ({
  async getAll(sortField = "seedId") {
    const events = await eventsRepo.getAll(sortField)
    const threatLevels = await eventsRepo.getThreatLevels()
    const seeds = await seedsRepo.getAll()

    const eventsWithThreatAndSeed = events.map((event) => {
      return {
        ...event,
        threatLevel: threatLevels[event.threatLevelCode],
        seed: seeds.find((seed) => seed.id === event.seedId),
      }
    })
    // console.log("eventsWithThreatAndSeed: ", eventsWithThreatAndSeed)
    return eventsWithThreatAndSeed
  },
})

module.exports = EventsService()
