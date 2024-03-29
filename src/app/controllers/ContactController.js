const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(req,res) {
    const {orderBy} = req.query;
    //Listar todos os registros
    const contacts = await ContactsRepository.findAll(orderBy);

    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

    //Wildcard - Cunringa - libera todas as origens
    // res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(contacts);
  }

  async show(req,res) {
    // Obter UM registro
    const {id} = req.params
    const contact = await ContactsRepository.findById(id);

    if ( !contact ) {
      return res.status(404).json( { error: 'Contact Not Found' } );
    }

    res.status(200).json(contact);
  }

  async store(req,res) {
    // Criar novo registro
    const { name, email, phone, category_id } = req.body;

    if (!name){
      return res.status(400).json({error: 'Name is required'})
    }

    const contactExists = await ContactsRepository.findByEmail(email);

    if(contactExists){
      return res.status(400).json({error:"This e-mail is already in use"});
    }

    const contact = await ContactsRepository.create({
      name,email,phone,category_id
    });

    res.status(201).json(contact);
  }

  async update(req,res){
    const {id} = req.params;
    const {name,email,phone,category_id} = req.body;

    const contactExists = await ContactsRepository.findById(id);

    if(!contactExists){
      return res.status(404).json({error:"Contact Not Found"});
    }

    if(!name){
      return res.status(400).json({error: 'Name is required'})
    }

    const contactByEmail = await ContactsRepository.findByEmail(email);

    if(contactByEmail && contactByEmail.id !== id){
      return res.status(400).json({error:"This e-mail is already in use"});
    }
    const contact = await ContactsRepository.update(id,{
      name,email,phone,category_id
    });

    res.status(201).json(contact);

  }

  async delete(req,res){
    const {id} = req.params;

    await ContactsRepository.delete(id);
    // 204: No contact
    res.sendStatus(204);

  }


}

// Singleton
module.exports = new ContactController();
