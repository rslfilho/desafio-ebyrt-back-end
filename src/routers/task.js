const express = require('express');

const taskController = require('../controllers/task');
const { validation } = require('../middlewares');

const router = express.Router({ mergeParams: true });

router.post('/', validation.description, taskController.create);
router.patch('/description/:taskId', validation.description, taskController.updateDescription);
router.patch('/status/:taskId', validation.status, taskController.updateStatus);

module.exports = router;
