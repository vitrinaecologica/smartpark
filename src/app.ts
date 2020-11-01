import express from 'express';
import { PORT } from './config/constants';

const app = express();


app.get('/', (req, res) => {
  res.send('Todo SmartPark debe empezar con un primer paso! Hola mundo!');
});


app.listen(PORT).on("error", (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${PORT}`);
});
