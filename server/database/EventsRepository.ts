import eventData from './events.json';

const EventsRepository = () => ({
  async getAll(sortField) {
    return new Promise((resolve) => resolve(eventData));
  },
});

export default EventsRepository();
