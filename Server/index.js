const express = require('express');
const app = express();
const knex = require('./db');

const PORT = 8000;

app.use((req, res) => {
  res.sendStatus(418);
})

app.listen(POST, () => {
  console.log('listening on port', PORT);
})
