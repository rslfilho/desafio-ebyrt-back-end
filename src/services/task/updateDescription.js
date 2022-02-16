const taskModel = require('../../database/models/task');
const { errors } = require('../../helpers');

module.exports = async (email, taskId, { description }) => {
  const count = await taskModel.updateDescription(email, taskId, { description });

  if (!count) throw errors.taskNotFound;

  return { message: `${count} task updated` };
};
