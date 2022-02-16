const express = require('express');

const userController = require('../controllers/user');
const { validation } = require('../middlewares');

const router = express.Router({ mergeParams: true });

router.post('/', validation.login, userController.login);

module.exports = router;
