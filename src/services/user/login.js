const userModel = require('../../database/models/user');
const { errors, jwt } = require('../../helpers');

module.exports = async ({ email, password }) => {
  const user = await userModel.findByEmail(email);
  if (!user) throw errors.userNotFound;

  if (user.password !== password) throw errors.wrongPassword;

  delete user.password;
  delete user.tasks;

  const token = jwt.createToken(user);

  return {
    ...user,
    token,
  };
};
