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

        }catch(e){
            res.status(400).json({err:e.message});
        }
    }
}

module.exports = new PokeTipoController();