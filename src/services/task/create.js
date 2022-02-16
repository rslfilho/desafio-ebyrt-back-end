const taskModel = require('../../database/models/task');

module.exports = async (email, { description }) => {
  const created = await taskModel.create(email, { description });

  return created;
};
