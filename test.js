require('dotenv').config();
const User = require('./src/database/models/User');

const teste = async () => {
  try {
    const created = await User.tasks.create({
      description: 'Fazer almoço quinta-feira',
      category: 'Pessoal',
    });
    console.log(created);
    return created;
  } catch (e) {
    console.log(e.code);
  }
};

teste();
