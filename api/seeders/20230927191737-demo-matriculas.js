'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Matriculas', [
      {
        status: "confirmado",
        estudante_id: 16,
        turma_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "confirmado",
        estudante_id: 17,
        turma_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "confirmado",
        estudante_id: 18,
        turma_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "confirmado",
        estudante_id: 19,
        turma_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "cancelado",
        estudante_id: 16,
        turma_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "cancelado",
        estudante_id: 17,
        turma_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Matriculas', null, {});
  }
};
