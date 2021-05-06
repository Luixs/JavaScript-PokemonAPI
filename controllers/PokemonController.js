const { Pokemon, Poketipo } = require('../models');

class PokemonController {
    async getAll(req,res) {
        try {
            const pokemons = await Pokemon.findAll({
                include: [{
                    model: Poketipo, 
                    as: "poketipo"                   
                }]
            })
            res.status(200).json({"Pokemons": pokemons});
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }
    async create(req,res){
        try{
            let pkExist = Poketipo.findByPk(req.body.PoketipoId);
            if(!pkExist){
                throw new Error('Tipo não existe')
            }
            else{
                let pokemonVez = {
                    nome: req.body.nome,
                    nivel: Number(req.body.nivel),
                    poketipoId: Number(req.body.PoketipoId)
                }
                const PokemonRes = Pokemon.create(pokemonVez);
                res.status(200).json({"Pokemon":pokemonVez})
            }
            
        }catch(e){
            res.status(400).json({error: e.message})
        }
    }

}

module.exports  = new PokemonController();