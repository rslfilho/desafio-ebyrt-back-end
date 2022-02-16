const connection = require('../../connection');

module.exports = async (email) => {
  const db = await connection();
  const collection = await db.collection('users');
  const user = await collection.findOne({ email });

  return user;
};
