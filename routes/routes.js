const { Router } = require ('express');
/* IMPORTAR CONTROLLERS */

const PokemonController = require('../controllers/PokemonController');
const PokeTipoController = require('../controllers/PokeTipoController');

const routes = Router();

routes.get('/', (req,res) => {
    res.status(200).send({mensagem: "Bem-vindo ao mundo Pokemon!"});
})
//POKEMON ROUTES
routes.get('/pokemons', PokemonController.getAll);
routes.get('/pokemon/:id', PokemonController.getOne);
routes.post('/pokemon', PokemonController.create);
//POKETIPO ROUTES
routes.get('/poketipos', PokeTipoController.getAll);
routes.get('/poketipo/:id', PokeTipoController.getOne);
routes.post('/poketipo', PokeTipoController.create);

module.exports = routes;