const express = require("express");
const cors = require("cors");
const { apiRouter } = require("./routes/api");
const { eventsRouter } = require("./routes/events");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.use("/api", apiRouter);

app.use("/api/events", eventsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
