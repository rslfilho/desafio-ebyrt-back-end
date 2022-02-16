const express = require('express');

const userRouter = require('./user');
const taskRouter = require('./task');
const loginRouter = require('./login');

const root = express.Router({ mergeParams: true });

root.use('/users', userRouter);
root.use('/tasks', taskRouter);
root.use('/login', loginRouter);

module.exports = root;
