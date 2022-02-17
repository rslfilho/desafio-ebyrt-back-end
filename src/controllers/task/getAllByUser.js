const taskService = require('../../services/task');

module.exports = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const response = await taskService.getAllByUser(userId);

    return res.status(200).json(response);
  } catch (e) {
    return next(e);
  }
};
