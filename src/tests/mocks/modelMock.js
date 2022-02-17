const user =  {
  "_id": {
    "$oid": "620d5ce4006431ef60049daa"
  },
  "firstName": "Usuário",
  "lastName": "Teste",
  "email": "teste@email.com",
  "password": "123456",
  "tasks": [
    {
      "_id": {
        "$oid": "620d5ce4006431ef60049daa"
      },
      "description": "Fazer almoço",
      "status": "active"
    },
    {
      "_id": {
        "$oid": "620d5d82ee59fe8d563526e3"
      },
      "description": "Fazer jantar",
      "status": "active"
    },
    {
      "_id": {
        "$oid": "620d6e1f357f00ae28e66da5"
      },
      "description": "Fazer café da manhã",
      "status": "active"
    },
  ],
};

const returnedUser = {
  "firstName": "Usuário",
  "lastName": "Teste",
  "email": "teste@email.com",
};

const newUser = {
  firstName: 'Usuário',
  lastName: 'Teste 02',
  email: 'teste2@email.com',
  password: '123456',
};

const createdUser = {
  "_id": {
    "$oid": "620d5ce4006431ef60049daa"
  },
  firstName: 'Usuário',
  lastName: 'Teste',
  email: 'teste@email.com',
};

const userNotExists = {
  email: 'email@erradodemais.com',
  password: '000000',
};

const correctLogin = {
  email: 'teste@email.com',
  password: '123456',
};

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYyMGU0Zjc4NjIwOWFkYjZkNWFjYmFhNyIsImZpcnN0TmFtZSI6IkZ1bGFubyIsImxhc3ROYW1lIjoiZGUgVGFsIiwiZW1haWwiOiJmdWxhbm9AZW1haWwuY29tIn0sImlhdCI6MTY0NTEyNDE5MCwiZXhwIjoxNjQ1MjEwNTkwfQ.E2kXltiy8nG80LvTcTIkIX9u2dpwwzwrI3-NKASkCvE';

module.exports = {
  user,
  newUser,
  createdUser,
  token,
  userNotExists,
  returnedUser,
  correctLogin,
};
