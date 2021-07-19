const ContactsRepository = require('../repositories/ContactsRepository')

class ContactController{
  async index(req,res){
    //Listar todos os registros
    const contacts = await ContactsRepository.findAll();

    res.status(200).json(contacts);
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

  async store(req,res){
    // Criar novo registro
    const {name,email,phone,category_id}=req.body;

    if(!name){
      return res.status(400).json({error: 'Name is required'})
    }

    const contactExists = await ContactsRepository.findByEmail(email);

    if(contactExists){
      return res.status(400).json({error:"This e-mail is already been taken"});
    }

    const contact = await ContactsRepository.create({
      name,email,phone,category_id
    });

    res.json(contact);
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
