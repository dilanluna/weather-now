import request from 'supertest';
import { INTERNAL_SERVER_ERROR, NOT_FOUND, OK } from 'http-status';
import app from './app';

describe('Weather Now Backend', () => {
  it('should return Not Found response for unhandled endpoints', async () => {
    const response = await request(app).get('/not-handled-endpoint');
    expect(response.status).toBe(NOT_FOUND);
    expect(response.headers['content-type']).toMatch(/application\/json/);
    expect(response.body).toEqual(
      expect.objectContaining({
        status: expect.any(Number),
        message: expect.any(String),
      }),
    );
  });

  it('should return Internal Server Error response for server errors', async () => {
    // request should fail becose latitude and longitud are not provided un query params
    const response = await request(app).get('/weather/current');
    expect(response.status).toBe(INTERNAL_SERVER_ERROR);
    expect(response.headers['content-type']).toMatch(/application\/json/);
    expect(response.body).toEqual(
      expect.objectContaining({
        status: expect.any(Number),
        message: expect.any(String),
      }),
    );
  });

  it('should return Success response when valid longitude and latitude are given', async () => {
    const city = {
      name: 'New York',
      coord: {
        lon: -75.499901,
        lat: 43.000351,
      },
    };
    const response = await request(app).get(
      `/weather/current?lat=${city.coord.lat}&lon=${city.coord.lon}`,
    );
    expect(response.status).toBe(OK);
    expect(response.headers['content-type']).toMatch(/application\/json/);
    expect(response.body).toMatchObject({
      name: city.name,
    });
  });
});
