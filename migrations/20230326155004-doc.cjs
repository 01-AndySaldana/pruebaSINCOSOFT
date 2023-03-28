'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('docs',{
      id: {
        type:Sequelize.DataTypes.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      name_original: {
        type:Sequelize.DataTypes.STRING,
        allowNull:false
      },
      name_personalizado: {
        type:Sequelize.DataTypes.STRING,
        allowNull:false
      },
      extension: {
        type:Sequelize.DataTypes.STRING,
        allowNull:false
      },
      mimetype: {
        type:Sequelize.DataTypes.STRING,
        allowNull:false
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('docs');
  }
};
