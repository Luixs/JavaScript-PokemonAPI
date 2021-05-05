
module.exports = (sequelize, Sequelize) =>{
    const PokeTipo = sequelize.define("Poketipo", {
        descricao: sequelize.STRING
    })

    PokeTipo.associate = (models)=>{
        PokeTipo.hasMany(models.Pokemon, {
            foreingKey: "poketipoId",
            as: "poketipo"
        })
    }
}

