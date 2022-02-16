const Joi = require('joi');

const schema = Joi.object({
  firstName: Joi.string()
    .required(),
  lastName: Joi.string()
  .required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(6)
    .required(),
});

module.exports = (obj) => schema.validate(obj);
