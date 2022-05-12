const eventData = require("./events.json")
const threatLevels = require("../constants/ThreatLevels")

const EventsRepository = () => ({
  async getAll(sortField) {
    const dataAsc = eventData.sort(({[sortField]: a}, {[sortField]: b}) => a-b)
    return new Promise((resolve) => resolve(dataAsc))
    // return new Promise((resolve) => resolve(eventData))
  },
  async getThreatLevels() {
    return new Promise((resolve) => resolve(threatLevels))
  },
})

module.exports = EventsRepository()
