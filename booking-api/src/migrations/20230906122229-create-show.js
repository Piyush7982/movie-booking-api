"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("shows", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      movieId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "movies",
          key: "id",
          onDelete: "CASCADE",
        },
      },
      theaterId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "theatres",
          key: "id",
          onDelete: "CASCADE",
        },
      },
      date: {
        type: Sequelize.DATE,
      },
      availableSeats: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      costEach: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("shows");
  },
};
