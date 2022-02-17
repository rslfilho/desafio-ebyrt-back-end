const taskModel = require('../../database/models/task');
const { errors } = require('../../helpers');

module.exports = async (id) => {
  const tasks = await taskModel.getAllByUser(id);

  if (!tasks) throw errors.userNotFound;

  return tasks;
};
