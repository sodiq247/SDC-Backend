"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("transaction_logs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
          name: "transaction_user_id",
        },
      },
      transaction_ref: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      servide_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      recipient: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      currency: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      amount: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      type: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      status: {
        type: Sequelize.STRING,
        values: ["initiated", "pending", "verified"],
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};