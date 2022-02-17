const user = {
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

const newUser = {
  firstName: 'Usuário',
  lastName: 'Teste 02',
  email: 'teste2@email.com',
  password: '123456',
};

const tasksIds = [
  '620d5ce4006431ef60049daa',
  '620d5d82ee59fe8d563526e3',
  '620d6e1f357f00ae28e66da5',
];

const email = 'teste@email.com';

module.exports = {
  tasksIds,
  email,
  user,
  newUser,
};
