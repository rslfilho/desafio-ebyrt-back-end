const errors = {
  userExists: {
    statusCode: 409,
    code: 'conflict',
    message: 'User already registered',
  },
  invalidFields: { 
    statusCode: 400,
    code: 'bad_request',
    message: 'Invalid fields',
  },
  taskNotFound: {
    statusCode: 404,
    code: 'not_found',
    message: 'Task does not exist',
  },
};

module.exports = errors;
