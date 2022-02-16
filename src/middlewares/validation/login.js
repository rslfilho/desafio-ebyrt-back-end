const validationService = require('../../services/validation');
const { errors } = require('../../helpers');

module.exports = (req, _res, next) => {
  try {
    const { email, password } = req.body;
    const { error } = validationService.login({ email, password });
    if (error) throw errors.invalidFields;
    return next();
  } catch (e) {
    return next(e);
  }
};
