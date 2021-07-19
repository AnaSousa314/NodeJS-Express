const {v4} = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Ana',
    email: 'ana@email.com',
    phone: '123123123',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Jose',
    email: 'jose@email.com',
    phone: '489523123',
    category_id: v4(),
  },
];

class ContatctsRepository{
  findAll(){
    return new Promise((resolve)=> resolve(contacts));
  }

  findById(id){
    return new Promise((resolve)=>resolve( contacts.find(contact=>contact.id === id)));
  }

  findByEmail(email){
    return new Promise((resolve)=>resolve( contacts.find(contact=>contact.email === email)));
  }

  delete(id){
    return new Promise((resolve)=>{
      contacts = contacts.filter((contact)=>contact.id !== id);
      resolve();
    });
  }

  create({name,email,phone,category_id}){
    return new Promise((resolve)=>{
      const newContact ={
        id: v4(),
        name,
        email,
        phone,
        category_id
      };

      contacts.push(newContact);
      resolve(newContact);
    });
  }
  

}

module.exports = new ContatctsRepository;
