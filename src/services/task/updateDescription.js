const taskModel = require('../../database/models/task');
const { errors } = require('../../helpers');

module.exports = async (email, taskId, { description }) => {
  const count = await taskModel.updateDescription(email, taskId, { description });

  if (!count && count !== 0) throw errors.taskNotFound;

  return { message: `${count} task updated` };
};
