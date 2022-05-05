const { Router } = require('express');
const eventsServive = require('../../services/events/EventsService');

const router = new Router();

router.get("/", async (_res, res) => {
  const events = await eventsServive.getAll();
  res.json({ events });
});

router.get("/:id", async (_res, res) => {
  console.log(_res.params.id);
  const event = await eventsServive.getById();
  res.json({ event });
});

module.exports = router;
