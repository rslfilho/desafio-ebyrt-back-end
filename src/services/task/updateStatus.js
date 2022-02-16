const taskModel = require('../../database/models/task');
const { errors } = require('../../helpers');

module.exports = async (email, taskId, { status }) => {
  const count = await taskModel.updateStatus(email, taskId, { status });

  if (!count && count !== 0) throw errors.taskNotFound;

  return { message: `${count} task updated` };
};
