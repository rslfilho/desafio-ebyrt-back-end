const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectId } = require('mongodb');

const mongoDBMock = require('../connectionMock');
const taskModel = require('../../database/models/task');
const dbMock = require('../mocks/dbMock');

describe.only('Testando os Models de tarefas', () => {
  let connectionMock;
  let usersCollection;
  let userId;
  let testTaskId;

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

  describe('o model "getAllByUser"', () => {
    let response;

    before(async () => {
      response = await taskModel.getAllByUser(userId);
    });

    it('retorna um array', () => {
      expect(response).to.be.an('array');
    });

    it('o array tem 03 elementos', () => {
      expect(response).to.have.length(3);
    });

    it('o array tem as 03 tarefas esperadas', () => {
      dbMock.tasks.forEach((task) => expect(response).to.deep.include(task));
    });
  });

  describe('o model "create"', () => {
    let response;

    before(async () => {
      response = await taskModel.create(dbMock.email, { description: 'Tarefa do teste' });
      testTaskId = response['_id'];
    });

    it('retorna um objeto', () => {
      expect(response).to.be.an('object');
    });

    it('retorna a tarefa com _id e status', () => {
      expect(response).to.have.all.keys('_id', 'description', 'status');
    });

    it('adiciona a tarefa ao banco de dados', async () => {
      const { tasks } = await usersCollection.findOne({ email: dbMock.email });
      expect(tasks).to.deep.include(response);
    });
  });

  describe('o model "updateDescription"', () => {
    describe('quando a o usuário ou a tarefa não existem', () => {
      let response;
  
      before(async () => {
        response = await taskModel.updateDescription(
          dbMock.email,
          '620d5d82ee59fe8d563526e7',
          { description: 'Tarefa do teste atualizada' }
        );
      });

      it('retorna nulo', () => {
        expect(response).to.be.null;
      });
    });

    describe('quando a o usuário e a tarefa existem', () => {
      let response;
  
      before(async () => {
        response = await taskModel.updateDescription(
          dbMock.email,
          testTaskId,
          { description: 'Tarefa do teste atualizada' }
        );
      });

      it('retorna "1" quando a descrição era diferente e foi atualizada', () => {
        expect(response).to.equal(1);
      });

      it('retorna "0" quando a descrição era a mesma e não foi atualizada', async () => {
        const newResponse = await taskModel.updateDescription(
          dbMock.email,
          testTaskId,
          { description: 'Tarefa do teste atualizada' }
        );
        expect(newResponse).to.equal(0);
      });
    });
  });

  describe('o model "updateStatus"', () => {
    describe('quando a o usuário ou a tarefa não existem', () => {
      let response;
  
      before(async () => {
        response = await taskModel.updateStatus(
          dbMock.email,
          '620d5d82ee59fe8d563526e7',
          { status: 'inactive' }
        );
      });

      it('retorna nulo', () => {
        expect(response).to.be.null;
      });
    });

    describe('quando a o usuário e a tarefa existem', () => {
      let response;
  
      before(async () => {
        response = await taskModel.updateStatus(
          dbMock.email,
          testTaskId,
          { status: 'inactive' }
        );
      });

      it('retorna "1" quando o status era diferente e foi atualizada', () => {
        expect(response).to.equal(1);
      });

      it('retorna "0" quando o status era o mesmo e não foi atualizada', async () => {
        const newResponse = await taskModel.updateStatus(
          dbMock.email,
          testTaskId,
          { status: 'inactive' }
        );
        expect(newResponse).to.equal(0);
      });
    });
  });
});
