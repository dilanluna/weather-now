import morgan from 'morgan';
import { isHttpError, NotFound } from 'http-errors';
import { OK, INTERNAL_SERVER_ERROR } from 'http-status';
import { OwmApiClient } from 'openweathermap-api-client';
import express, { NextFunction, Request, Response } from 'express';

const app = express();

if (typeof process.env.OPENWEATHERMAP_API_KEY === 'undefined') {
  throw new Error(
    'OPENWEATHERMAP_API_KEY environment variable must be settled',
  );
}

const client = new OwmApiClient({
  apiKey: process.env.OPENWEATHERMAP_API_KEY,
  units: 'metric',
});

app.use(morgan('dev'));

app.get('/weather/current', async (req, res, next) => {
  try {
    const { lat, lon } = req.query;
    const weather = await client.current({
      lat: Number(lat),
      lon: Number(lon),
    });
    res.status(OK).json(weather);
  } catch (err) {
    next(err);
  }
});

app.use((req, res, next) => {
  return next(new NotFound());
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = isHttpError(err) ? err.statusCode : INTERNAL_SERVER_ERROR;
  const errorMessage = err?.message ?? 'Unexpected error.';
  return res.status(statusCode).json({
    status: statusCode,
    message: errorMessage,
  });
});

export default app;
