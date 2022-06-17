import seedsData from '../../database/SeedsRepository';

const SeedsService = () => ({
  getAll() {
    return seedsData.getAll();
  },
});

export default SeedsService();
