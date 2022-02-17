const express = require('express');

const taskController = require('../controllers/task');
const { validation, auth } = require('../middlewares');

const router = express.Router({ mergeParams: true });

router.post('/', auth, validation.description, taskController.create);
router.get('/:userId', auth, taskController.getAllByUser);
router.patch('/status/:taskId', auth, validation.status, taskController.updateStatus);
router.patch(
  '/description/:taskId',
  auth,
  validation.description,
  taskController.updateDescription,
);

module.exports = router;
