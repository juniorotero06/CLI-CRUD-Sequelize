"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Contacts", [
      {
        firstname: "Junior",
        lastname: "Otero",
        phone: "0000000000",
        email: "junior@email.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
      },
      {
        firstname: "Jose",
        lastname: "Otero",
        phone: "1230000000",
        email: "jose@email.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
