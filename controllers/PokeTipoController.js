const { Poketipo } = require('../models');

class PokeTipoController{
    async getAll(req,res){
        try{
            const Poketipos = await Poketipo.findAll()
            res.status(200).json({"poketipos": Poketipos});
        }catch(e){
            res.status(400).json({err: e.message});
        }
    }
    async create(req,res){
        try{
            const poketipo = await Poketipo.create(req.body);
            res.status(200).json(poketipo);
        }catch(e){
            res.status(400).json({err:e.message});
        }
    }
    
    async getOne(req,res){
        try {
            const idSearch = Number(req.params.id);
            const poketipoFind = await Poketipo.findByPk(idSearch); 
            if(!poketipoFind){
                res.status(200).json({Mensagem: "Não existe Poketipo com esse usuário, Digite um Válido!!"})
            }else{
                res.status(200).json({"Poketipo": poketipoFind})
            }
            
        } catch (e) {
            res.status(400).json({erro:e});
        }
    }
}

module.exports = new PokeTipoController();