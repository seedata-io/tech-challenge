const { Router } = require('express');
const eventsService = require('../../services/events/EventsService');

const router = new Router();

router.get('/:sortField?', async (req, res) => {
  const { sortField } = req.query;
  const events = await eventsService.getAll(sortField);

  res.status(200).send({ events });
});

module.exports = router;
