const express = require("express");
const { apiRouter } = require("./routes/api");
const { eventsRouter } = require("./routes/events");
const { seedsRouter } = require("./routes/seeds");

const PORT = process.env.PORT || 3001;

const app = express();

app.use('/api', apiRouter)

app.use('/api/events', eventsRouter)

app.use('/api/seeds', seedsRouter)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});