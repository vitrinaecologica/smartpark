import express from 'express';

const app = express();
const port = 3030;
app.get('/', (req, res) => {
  res.send('Todo SmartPark debe empezar con un primer paso! Hola mundo!');
});
app.listen(port).on("error", (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});