const userModel = require('../../database/models/user');
const { errors } = require('../../helpers');

module.exports = async ({ firstName, lastName, email, password }) => {
  const found = await userModel.findByEmail(email);
  if (found) throw errors.userExists;

  const created = await userModel.create({ firstName, lastName, email, password });

  return created;
};
