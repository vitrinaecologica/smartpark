import express, {Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser"
import { PORT } from './config/constants';

const app: Application = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.send('Todo SmartPark debe empezar con un primer paso! Hola mundo!');
});


app.listen(PORT).on("error", (err) => {
  if (err) {
    return console.error(err);
  }
const port = 3030;
  return console.log(`server is listening on PORT ${PORT}`);
});
