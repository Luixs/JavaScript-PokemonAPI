const { Router } = require('express');

//const PokemonController
//const PokeTipoController 

const routes = Router();

routes.get('/', (req,res)=>{
    res.status(200).json({mensagem: "Olá mundo"});
})