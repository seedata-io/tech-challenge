import { Router } from 'express';

const router = Router();

router.get("/", (_res, res) => {
  res.json({ message: 'Server running!' });
});

export default router;
