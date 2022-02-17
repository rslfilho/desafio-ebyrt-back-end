const sinon = require('sinon');
const { expect } = require('chai');

const userService = require('../../services/user');
const userModel = require('../../database/models/user');
const { errors, jwt } = require('../../helpers');
const modelMock = require('../mocks/modelMock');

describe.only('Testando os services de usuário', () => {
  describe('o service "create"', () => {
    describe('quando já existe usuário cadastrado com o email', () => {
      before(() => {
        sinon.stub(userModel, 'findByEmail').resolves(modelMock.user);
      });
  
      after(async () => {
        await userModel.findByEmail.restore();
      });

      it('lança um erro de usuário já cadastrado', async () => {
        try {
          await userService.create(modelMock.newUser);
        } catch (e) {
          expect(e).to.equal(errors.userExists)
        }
      });
    });

    describe('quando não existe usuário cadastrado com o email', () => {
      let response;

      before(async () => {
        sinon.stub(userModel, 'findByEmail').resolves(null);
        sinon.stub(userModel, 'create').resolves(modelMock.createdUser);
        response = await userService.create(modelMock.newUser);
      });
  
      after(async () => {
        await userModel.findByEmail.restore();
        await userModel.create.restore();
      });

      it('retorna um objeto', async () => {
        expect(response).to.deep.equal(modelMock.createdUser);
      });

      it('o objeto tem as chaves "_id", "firstName", "lastName" e "email"', () => {
        expect(response).to.have.all.keys('_id', 'firstName', 'lastName', 'email');
      });
    });
  });

  describe('o service "login"', () => {
    describe('quando o usuário não existe', () => {
      before(() => {
        sinon.stub(userModel, 'findByEmail').resolves(null);
      });

      after(async () => {
        await userModel.findByEmail.restore();
      });

      it('lança um erro de usuário não existe', async () => {
        try {
          await userService.login(modelMock.userNotExists);
        } catch (e) {
          expect(e).to.deep.equal(errors.userNotFound);
        }
      });
    });

    describe('quando o a senha não é a cadastrada para o usuário', () => {
      before(() => {
        sinon.stub(userModel, 'findByEmail').resolves(modelMock.user);
      });

      after(async () => {
        await userModel.findByEmail.restore();
      });

      it('lança um erro de senha errada', async () => {
        try {
          await userService.login(modelMock.userNotExists);
        } catch (e) {
          expect(e).to.deep.equal(errors.wrongPassword);
        }
      });
    });

    describe('quando todos os dados estão corretos e válidos', () => {
      let response;

      before(async () => {
        sinon.stub(userModel, 'findByEmail').resolves(modelMock.user);
        sinon.stub(jwt, 'createToken').returns(modelMock.token);
        response = await userService.login(modelMock.correctLogin);
      });

      after(async () => {
        await userModel.findByEmail.restore();
        await jwt.createToken.restore();
      });

      it('retorna um objeto', () => {
        expect(response).to.be.an('object');
      });

      it('o objeto é o esperado', () => {
        expect(response).to.deep.equal({ ...modelMock.createdUser, token: modelMock.token });
      });
    });
  });
});
