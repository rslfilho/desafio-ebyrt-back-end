require('dotenv').config();
const { MongoClient } = require('mongodb');

const { MONGODB_URL, NODE_ENV } = process.env;

const sufix = {
  development: '-dev',
  test: '-test',
  production: '',
};

const DB_NAME = `to-do-app${sufix[NODE_ENV]}`;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

const connection = async () => {
  if (db) return db;
  
  db = (await MongoClient.connect(MONGODB_URL, OPTIONS)).db(DB_NAME);

  return db;
};

module.exports = connection;
