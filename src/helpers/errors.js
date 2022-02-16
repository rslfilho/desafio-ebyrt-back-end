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
  userNotFound: {
    statusCode: 404,
    code: 'not_found',
    message: 'User does not exist',
  },
  wrongPassword: {
    statusCode: 400,
    code: 'bad_request',
    message: '"password" does not match',
  },
  missingToken: {
    statusCode: 401,
    code: 'unauthorized',
    message: 'Token not found',
  },
  jwtMalformed: {
    statusCode: 401,
    code: 'unauthorized',
    message: 'Expired or invalid token',
  },
};

module.exports = errors;
