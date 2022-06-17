import eventsRepo from '../../database/EventsRepository';
import seedsRepo from '../../database/SeedsRepository';

const EventsService = () => ({
  async getAll(sortField = 'seedId') {
    return eventsRepo.getAll(sortField);
  },
});

export default EventsService();
