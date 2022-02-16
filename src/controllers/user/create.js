const userService = require('../../services/user');

module.exports = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const response = await userService.create({ firstName, lastName, email, password });
    return res.status(201).json(response);
  } catch (e) {
    return next(e);
  }
};
