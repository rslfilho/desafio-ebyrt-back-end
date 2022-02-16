const validationService = require('../../services/validation');
const { errors } = require('../../helpers');

module.exports = (req, _res, next) => {
  try {
    const { status } = req.body;
    const { error } = validationService.status({ status });
    if (error) throw errors.invalidFields;
    return next();
  } catch (e) {
    return next(e);
  }
};
