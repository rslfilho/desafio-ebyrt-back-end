const connection = require('../../connection');

module.exports = async ({ firstName, lastName, email, password }) => {
  const db = await connection();
  const collection = await db.collection('users');
  const { insertedId: _id } = await collection.insertOne({
    firstName,
    lastName,
    email,
    password,
    tasks: [],
  });

  return {
    _id,
    firstName,
    lastName,
    email,
    password,
  };
};
