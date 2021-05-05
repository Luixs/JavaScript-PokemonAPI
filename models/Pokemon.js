module.exports = (sequelize, Sequelize) =>{
    const Pokemon = sequelize.define("Pokemon",{
        nome: sequelize.STRING,
        nivel: sequelize.INTEGER
    })
    Pokemon.associate = (models) =>{
        Pokemon.belongsTo(models.Poketipo, {
            foreingKey: 'poketipoId',
            as: "poketipo"
        })
    }
    
}

