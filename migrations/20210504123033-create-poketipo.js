'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Poketipos', {
       id: {
         primaryKey: true,
         allowNull: false,
         autoIncrement: true,         
         type:Sequelize.INTEGER
        },
        descricao:{
          allowNull:false,
          type: Sequelize.STRING
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
    await queryInterface.dropTable('Poketipos');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
