const validationService = require('../../services/validation');
const { errors } = require('../../helpers');

module.exports = (req, _res, next) => {
  try {
    const { description } = req.body;
    const { error } = validationService.task({ description });
    if (error) throw errors.invalidFields;
    return next();
  } catch (e) {
    return next(e);
  }
};
