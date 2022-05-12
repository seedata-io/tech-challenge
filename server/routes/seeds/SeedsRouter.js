const { Router } = require('express');
const seedsService = require('../../services/seeds/SeedsService');

const router = new Router();

router.get("/", async (_req, res) => {
  const seeds = await seedsService.getAll();
  res.json({ seeds });
});

module.exports = router;
