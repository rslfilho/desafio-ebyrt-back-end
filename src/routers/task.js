const express = require('express');

const taskController = require('../controllers/task');
const { validation } = require('../middlewares');

const router = express.Router({ mergeParams: true });

router.post('/', validation.task, taskController.create);

module.exports = router;
