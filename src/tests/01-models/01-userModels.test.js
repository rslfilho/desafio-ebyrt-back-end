const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectId } = require('mongodb');

const mongoDBMock = require('../connectionMock');
const userModel = require('../../database/models/user');
const dbMock = require('../mocks/dbMock');

describe.only('Testando os Models de Usuário', () => {
  let connectionMock;
  let usersCollection;
  let userId;

  before(async () => {
    connectionMock = await mongoDBMock.connection();

    sinon.stub(MongoClient, 'connect')
      .resolves(connectionMock);
    
    const db = await connectionMock.db('to-do-app-test');
    usersCollection = await db.collection('users');

    const { insertedId } = await usersCollection.insertOne(dbMock.user);
    userId = insertedId;
  });

  after(async () => {
    await MongoClient.connect.restore();
    await usersCollection.deleteMany({});
  });

  describe('O model "findByEmail" de user', () => {
    it('retorna nulo quando o email não existe no banco de dados', async () => {
      const response = await userModel.findByEmail('email@errado.com');
      expect(response).to.be.null;
    });
  
    it('retorna o usuário quando o email existe no banco de dados', async () => {
      const response = await userModel.findByEmail(dbMock.email);
      expect(response).to.deep.equal({ _id: ObjectId(userId), ...dbMock.user });
    });
  });

  describe('O model "create" de user', () => {
    let response;

    before(async () => {
      response = await userModel.create(dbMock.newUser);  
    });

    it('retorna um objeto', () => {
      expect(response).to.be.an('object');
    });

    it('retorna o usuário sem a senha e com _id', () => {
      expect(response).to.have.all.keys('_id', 'firstName', 'lastName', 'email');
    });
  });
});
