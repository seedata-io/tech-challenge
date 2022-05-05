const { Router } = require('express');

const router = new Router();

router.get("/", (_res, res) => {
  res.json({ message: 'Server running!'})
});

module.exports = router;
