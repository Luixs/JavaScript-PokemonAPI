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

}

module.exports  = new PokemonController();