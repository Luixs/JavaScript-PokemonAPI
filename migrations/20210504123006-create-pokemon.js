'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pokemons', { 
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER 
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nivel: {
        allowNull: false,
        type: Sequelize.INTEGER
      }, 
      poketipoId:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Poketipos',
          key: 'id',
          as: 'poketipoId'
        }
      },
      createdAt:{
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt:{
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pokemons')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
