import * as express from 'express';
import { apiRouter } from './routes/api';
import { eventsRouter } from './routes/events';

const PORT = process.env.PORT || 3001;

const app = express();

app.use('/api', apiRouter);

app.use('/api/events', eventsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
