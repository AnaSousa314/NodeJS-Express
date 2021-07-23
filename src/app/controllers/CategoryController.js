const CategoriesRepository = require('../repositories/CategoriesRepository')

class CategoryController{
  async index(req,res){
    const categories = await CategoriesRepository.findAll();

    res.json(categories);
  }

  // start
  async show(req,res){
    const {id} = req.params;

    const category = await CategoriesRepository.findById(id);

    if(!category){
      res.status(404).json({error: 'Category Not Found'});
    }

    res.json(category);
  }//end

  async store(req,res){
    const {name} = req.body;

    if(!name){
      return res.status(400).json({error: 'Name is required'});
    }

    // start
    const categoryExists = await CategoriesRepository.findByName(name);

    if(categoryExists){
      return res.status(400).json({error:'This category already exists'})
    }
    // end
    const category = await CategoriesRepository.create({name});

    res.json(category);
  }

  //start
  async update(req,res){
    const {id} = req.params;
    const {name} = req.body;

    const categoryExists = await CategoriesRepository.findById(id);

    if(!categoryExists){
      return res.status(404).json({error:'Category Not Found'});
    }

    if(!name){
      res.status(400).json({error:'Name is required.'});
    }

    const category = await CategoriesRepository.update(id,{name});

    res.json(category);
  }

  async delete(req,res){
    const {id}=req.params;

    await CategoriesRepository.delete(id);
    res.sendStatus(204);
  }//end
}

module.exports = new CategoryController();