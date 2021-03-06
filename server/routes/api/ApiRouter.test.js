const express = require('express'); // import express
const apiRouter = require("./ApiRouter"); //import file we are testing
const request = require("supertest"); // supertest is a framework that allows to easily test web apis

const app = express(); //an instance of an express app, a 'fake' express app
app.use("/api", apiRouter); //routes

describe('server', () => {
  describe('/api', () => {
    it('should return success from /api GET', async () => {
      const { body, status } = await request(app).get("/api");
      expect(status).toEqual(200);
      expect(body).toEqual({ message: 'Server running!'})
    });
  });
})