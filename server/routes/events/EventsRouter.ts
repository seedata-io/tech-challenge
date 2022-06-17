import { Router } from 'express';
import eventsService from '../../services/events/eventsService';

const router = Router();

router.get("/", async (_req, res) => {
  const events = await eventsService.getAll();
  res.json({ events });
});

export default router;
