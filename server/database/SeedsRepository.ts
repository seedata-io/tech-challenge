import seedsData from './seeds.json';

const SeedsRepository = () => ({
  async getAll() {
    return new Promise((resolve) => resolve(seedsData));
  },
});

export default SeedsRepository();
