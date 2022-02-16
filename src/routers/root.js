const express = require('express');

const userRouter = require('./user');
const taskRouter = require('./task');

const root = express.Router({ mergeParams: true });

root.use('/users', userRouter);
root.use('/tasks', taskRouter);

module.exports = root;
