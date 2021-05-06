
module.exports = (sequelize, Sequelize) =>{
    const PokeTipo = sequelize.define("Poketipo", {
        descricao: Sequelize.STRING
    })

    PokeTipo.associate = (models)=>{
        PokeTipo.hasMany(models.Pokemon, {
            foreingKey: "poketipoId",
            as: "poketipo"
        })
    }
    return PokeTipo;
}

