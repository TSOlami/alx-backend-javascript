/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
const express = require('express');

const router = require('./routes/index');

const app = express();
const port = 1245;

app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);

app.listen(port);

export default app;
