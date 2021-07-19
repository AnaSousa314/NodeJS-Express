const {v4} = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Ana',
    email: 'ana@email.com',
    phone: '123123123',
    category: v4(),
  },
  {
    id: v4(),
    name: 'Jose',
    email: 'jose@email.com',
    phone: '489523123',
    category: v4(),
  },
];

class ContatctsRepository{
  findAll(){
    return new Promise((resolve)=> resolve(contacts));
  }

  findById(id){
    return new Promise((resolve)=>resolve( contacts.find(contact=>contact.id === id)));
  }

  delete(id){
    return new Promise((resolve)=>{
      contacts = contacts.filter((contact)=>contact.id !== id);
      resolve();
    });
  }


}

module.exports = new ContatctsRepository;
