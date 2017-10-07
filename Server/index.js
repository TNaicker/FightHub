const express = require('express');
const app = express();
const knex = require('./db');

const PORT = 8000;

const apiRoutes = require('./routing/api');
app.use(apiRoutes);

app.use((req, res) => {
  res.sendStatus(418);
})

app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
