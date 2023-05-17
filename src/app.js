import express from 'express';

import visiterRouter from './resources/Visiters/Visiter.router.js';
import cinemaRouter from './resources/Cinemas/Cinema.router.js';
import ticketRouter from './resources/Tickets/Ticket.router.js'

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/Visiters', visiterRouter);
app.use('/Cinemas', cinemaRouter);
app.use('/Tickets', ticketRouter);

export default app;
