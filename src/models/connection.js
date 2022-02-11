const mongoose = require('mongoose');

const sufix = {
  development: '-dev',
  test: '-test',
  production: '',
};

const URI = `${process.env.MONGODB_URL}${sufix[process.env.NODE_ENV]}`

let connection;

module.exports = async () => {
  if (connection) return connection;

  try {
    connection = await mongoose.connect(URI);
  } catch (e) {
    console.log(e);
  }

  return connection;
};
