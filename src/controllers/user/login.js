const userService = require('../../services/user');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const response = await userService.login({ email, password });
    return res.status(200).json(response);
  } catch (e) {
    return next(e);
  }
};
