const ContactsRepository = require('../repositories/ContactsRepository')

class ContactController{
  async index(req,res){
    //Listar todos os registros
    // const contacts = await ContactsRepository.findAll();

    // res.status(200).json(contacts);
    res.send(req.appId)
  }

  async show(req,res){
    // Obter UM registro
    const {id} = req.params
    const contact = await ContactsRepository.findById(id);

    if(!contact){
      return res.status(404).json({error: 'User Not Found'})
    }

    res.json(contact);
  }

  store(){
    // Criar novo registro
  }

  update(){

  }

  async delete(req,res){
    const {id} = req.params;

    const contact = await ContactsRepository.findById(id);

    if(!contact){
      return res.status(404).json({error: 'User Not Found'})
    }

    await ContactsRepository.delete(id);
    // 204: No contact
    res.sendStatus(204);

  }


}

// Singleton
module.exports = new ContactController();
