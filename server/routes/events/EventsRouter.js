const { Router } = require('express');
const eventsService = require('../../services/events/EventsService');

const router = new Router();

router.get("/", async (_req, res) => {
  const events = await eventsService.getAll();
  res.json({ events });
});

module.exports = router;
