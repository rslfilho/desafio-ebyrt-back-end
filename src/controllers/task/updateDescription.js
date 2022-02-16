const taskService = require('../../services/task');

module.exports = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const { description } = req.body;
    const { email } = req.user;

    const response = await taskService.updateDescription(email, taskId, { description });

    return res.status(200).json(response);
  } catch (e) {
    return next(e);
  }
};
