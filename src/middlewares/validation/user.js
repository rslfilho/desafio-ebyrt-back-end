const validationService = require('../../services/validation');
const { errors } = require('../../helpers');

module.exports = (req, _res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const { error } = validationService.user({ firstName, lastName, email, password });
    if (error) throw errors.invalidFields;
    return next();
  } catch (e) {
    return next(e);
  }
};
