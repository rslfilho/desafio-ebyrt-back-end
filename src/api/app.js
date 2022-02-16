const express = require('express');
const cors = require('cors');

const root = require('../routers/root');
const { error } = require('../middlewares');

const app = express();

app.use(cors());
app.use(express.json());

app.use(root);
app.use(error);

module.exports = app;
