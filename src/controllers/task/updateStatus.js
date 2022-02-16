const taskService = require('../../services/task');

module.exports = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const { status } = req.body;
    const { email } = req.user;

    const response = await taskService.updateStatus(email, taskId, { status });

    return res.status(200).json(response);
  } catch (e) {
    return next(e);
  }
};
