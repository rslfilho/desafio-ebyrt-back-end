const Joi = require('joi');

const schema = Joi.object({
  status: Joi.string()
    .valid('active', 'completed', 'inactive')
    .required(),
});

module.exports = (obj) => schema.validate(obj);
