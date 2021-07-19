class ContactController{
  index(req,res){
    //Listar todos os registros
    res.send("Olá")
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
