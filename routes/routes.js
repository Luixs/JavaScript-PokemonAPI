const { Router } = require ('express');
/* IMPORTAR CONTROLLERS */

const PokemonController = require('../controllers/PokemonController');
const PokeTipoController = require('../controllers/PokeTipoController');

const routes = Router();

routes.get('/', (req,res) => {
    res.status(200).send({mensagem: "Bem-vindo ao mundo Pokemon!"});
})

routes.get('/pokemons', PokemonController.getAll);
routes.get('/poketipos', PokeTipoController.getAll);

module.exports = routes;