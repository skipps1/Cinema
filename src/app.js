import express from 'express';

import router from './resources/Visiters/Visiter.router.js';

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/Visiters', router);

export default app;
