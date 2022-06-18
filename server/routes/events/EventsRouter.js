const { Router } = require("express");
const eventsServive = require("../../services/events/EventsService");

const router = new Router();

router.get("/", async (_req, res) => {
  const events = await eventsServive.getAll({ query: _req.query });
  res.json({ events });
});

module.exports = router;
