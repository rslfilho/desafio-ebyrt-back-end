const { ObjectId } = require('mongodb');
const connection = require('../../connection');

module.exports = async (email, taskId, { description }) => {
  const db = await connection();
  const collection = await db.collection('users');

  const { matchedCount, modifiedCount } = await collection.updateOne({
    email,
    'tasks._id': ObjectId(taskId),
  }, {
    $set: {
      'tasks.$.description': description,
    },
  });

  if (matchedCount === 0) return null;

  return modifiedCount;
};
