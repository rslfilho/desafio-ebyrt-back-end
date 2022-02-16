require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createToken = (payload) => {
  const token = jwt.sign({ data: payload }, JWT_SECRET, jwtConfig);
  return token;
};

const validateToken = (token) => {
  try {
    const { data } = jwt.verify(token, JWT_SECRET);
    return data;
  } catch (err) {
    return err;
  }
};

module.exports = {
  createToken,
  validateToken,
};
