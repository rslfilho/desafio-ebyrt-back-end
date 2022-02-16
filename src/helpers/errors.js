const errors = {
  userExists: {
    statusCode: 409,
    code: 'conflict',
    message: 'User already registered',
  },
};

module.exports = errors;
