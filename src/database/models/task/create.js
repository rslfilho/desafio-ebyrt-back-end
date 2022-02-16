const { ObjectId } = require('mongodb');
const connection = require('../../connection');

module.exports = async (email, { description }) => {
  const db = await connection();
  const collection = await db.collection('users');
  const id = new ObjectId();

  await collection.updateOne({ email }, {
    $push: {
      tasks: {
        _id: id,
        description,
        status: 'active',
      },
    },
  });

  return { _id: id, description, status: 'active' };
};
