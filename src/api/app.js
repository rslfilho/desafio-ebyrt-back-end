const express = require('express');
const cors = require('cors');

const root = require('../routers/root');

const app = express();

app.use(cors());
app.use(express.json());

app.use(root);

module.exports = app;
