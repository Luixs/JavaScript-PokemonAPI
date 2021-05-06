module.exports = (sequelize, Sequelize) =>{
    const Pokemon = sequelize.define("Pokemon",{
        nome: Sequelize.STRING,
        nivel: Sequelize.INTEGER
    })
    Pokemon.associate = (models) =>{
        Pokemon.belongsTo(models.Poketipo, {
            foreingKey: 'poketipoId',
            as: "poketipo"
        })
    }
    return Pokemon;        
}

