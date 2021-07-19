const {uuid} = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Ana',
    email: 'ana@email.com',
    phone: '123123123',
    category: uuid(),
  },
];

class ContatctsRepository{
  findAll(){
    return new Promise((resolve)=> resolve(contacts));
  }


}

module.exports = new ContatctsRepository;
