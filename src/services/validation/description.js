const Joi = require('joi');

const schema = Joi.object({
  description: Joi.string()
    .required(),
});

module.exports = (obj) => schema.validate(obj);
