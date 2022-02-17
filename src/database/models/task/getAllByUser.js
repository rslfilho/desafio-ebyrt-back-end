const { ObjectId } = require('mongodb');
const connection = require('../../connection');

module.exports = async (id) => {
  const db = await connection();
  const collection = await db.collection('users');

  const { tasks } = await collection
    .findOne({ _id: ObjectId(id) });

  return tasks;
};
