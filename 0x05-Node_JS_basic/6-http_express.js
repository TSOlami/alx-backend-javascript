/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
const express = require('express');

const app = express();
const port = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.listen(port, () => {
});

module.exports = app;
