const taskService = require('../../services/task');

module.exports = async (req, res, next) => {
  try {
    const { description } = req.body;
    const { email } = req.user;

    const response = await taskService.create(email, { description });

    return res.status(201).json(response);
  } catch (e) {
    return next(e);
  }
};
