const express = require('express');
const cors = require('cors');

const root = require('../routers/root');
const { error, swagger } = require('../middlewares');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/swagger', swagger.serve, swagger.setup);
app.use(root);
app.use(error);

module.exports = app;
