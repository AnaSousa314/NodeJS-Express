const ContactsRepository = require('../repositories/ContactsRepository')

class ContactController{
  async index(req,res){
    //Listar todos os registros
    const contacts = await ContactsRepository.findAll();

    res.status(200).json(contacts);
  }

  show(){
    // Obter UM registro

  }

  store(){
    // Criar novo registro
  }

  update(){

  }

  delete(){

  }


}

// Singleton
module.exports = new ContactController();
