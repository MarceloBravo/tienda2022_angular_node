'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [{
        id: 1,
        nombres: 'Administrador',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 2,
        nombres: 'Invitado',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};