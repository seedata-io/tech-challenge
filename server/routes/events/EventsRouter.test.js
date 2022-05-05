const express = require('express'); // import express
const eventsRouter = require("./EventsRouter"); //import file we are testing
const request = require("supertest"); // supertest is a framework that allows to easily test web apis
const eventsRepo = require('../../database/EventsRepository');
const seedsRepo = require('../../database/SeedsRepository');
const ThreatLevels = require('../../constants/ThreatLevels');

const app = express(); //an instance of an express app, a 'fake' express app
app.use("/api/events", eventsRouter); //routes

describe('EventRouter', () => {
  describe('GET:/events', () => {
    let getAllEventsSpy;
    let getAllSeedsSpy;
    beforeEach(() => {
      getAllEventsSpy = jest.spyOn(eventsRepo, 'getAll');
      getAllSeedsSpy =jest.spyOn(seedsRepo, 'getAll');
    });
    afterEach(() => {
      getAllEventsSpy.mockReset();
      getAllSeedsSpy.mockReset();
    }) 
    it('should return array from /api/events GET', async () => {
      const events = [
        {
          id: 1,
          seedId: "1",
          type: 'email',
          description: "Email event on seed 1",
          threatLevelCode: 0,
          createdDateTime: "2022-01-01T00:00:00.000Z"
        },
        {
          id: 2,
          seedId: "2",
          type: 'email',
          description: "Email event on seed 2",
          threatLevelCode: 2,
          createdDateTime: "2022-01-01T00:00:00.000Z"
        },
        {
          id: 3,
          seedId: "1",
          type: 'email',
          description: "Email event on seed 1",
          threatLevelCode: 1,
          createdDateTime: "2022-01-01T00:00:00.000Z"
        }
      ];

      const seeds = [
        {
          id: "1",
          name: "elyssa-yawning-moccasin",
          domain: "tiwwmaawnc.co.uk"
        },
        {
          id: "2",
          "name": "glenda-rapid-maroon",
          "domain": "iwradttiofdaam.com"
        },
      ];

      getAllEventsSpy.mockResolvedValue(events)
      getAllSeedsSpy.mockResolvedValue(seeds);

      const expectedEvents = [
        {
          ...events[0],
          threatLevel: ThreatLevels[events[0].threatLevelCode],
          seed: {
            ...seeds[0]
          }
        },
        {
          ...events[1],
          threatLevel: ThreatLevels[events[1].threatLevelCode],
          seed: {
            ...seeds[1]
          }
        },
        {
          ...events[2],
          threatLevel: ThreatLevels[events[2].threatLevelCode],
          seed: {
            ...seeds[0]
          }
        },
      ];

      const { status, body } = await request(app).get("/api/events");

      expect(status).toEqual(200);
      expect(getAllEventsSpy).toHaveBeenCalledTimes(1);
      expect(body).toEqual({ events: expectedEvents });

      const { events: returnedEvents } = body;
      expect(returnedEvents).toEqual(expectedEvents[0]);

    });
  });

  describe('GET:/events/:id', () => {
    let getByIdEventsSpy;
    let getByIdSeedsSpy;
    beforeEach(() => {
      getByIdEventsSpy = jest.spyOn(eventsRepo, 'getById');
      getByIdSeedsSpy =jest.spyOn(seedsRepo, 'getById');
    });
    afterEach(() => {
      getByIdEventsSpy.mockReset();
      getByIdSeedsSpy.mockReset();
    }) 
    it('should return single event from /api/events/:id GET', async () => {
      const event = {
        id: 3,
        seedId: "1",
        type: 'email',
        description: "Email event on seed 1",
        threatLevelCode: 1,
        createdDateTime: "2022-01-01T00:00:00.000Z"
      };

      const seed = {
        id: "1",
        name: "elyssa-yawning-moccasin",
        domain: "tiwwmaawnc.co.uk"
      };

      getByIdEventsSpy.mockResolvedValue(event)
      getByIdSeedsSpy.mockResolvedValue(seed);

      const expectedEvent = {
        ...event,
        threatLevel: ThreatLevels[event.threatLevelCode],
        seed
      };

      const { status, body } = await request(app).get(`/api/events/${event.id}`);

      expect(status).toEqual(200);
      expect(getByIdEventsSpy).toHaveBeenCalledTimes(1);
      expect(body).toEqual({ event: expectedEvent });

    });
    it('should return 404 with error message "No such event: $id" from /api/events/:id GET when passed an invalid id', async () => {
      const eventId = 1;
      const event = {
        id: 3,
        seedId: "1",
        type: 'email',
        description: "Email event on seed 1",
        createdDateTime: "2022-01-01T00:00:00.000Z"
      };

      const seed = {
        id: "1",
        name: "elyssa-yawning-moccasin",
        domain: "tiwwmaawnc.co.uk"
      };

      getByIdEventsSpy.mockResolvedValue(event)
      getByIdSeedsSpy.mockResolvedValue(seed);

      const { status, body } = await request(app).get(`/api/events/${eventId}`);

      expect(getByIdEventsSpy).toHaveBeenCalledTimes(1);
      expect(status).toEqual(404);
      expect(body).toEqual({ message: `No such event: ${eventId}`});

    });
  });
})