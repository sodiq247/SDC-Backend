"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TransactionLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TransactionLog.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
      });
    }
  }
  TransactionLog.init(
    {
      user_id: DataTypes.INTEGER,
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: DataTypes.TEXT,
      transaction_ref: DataTypes.STRING,
      amount: DataTypes.DOUBLE,
      status: DataTypes.STRING,
      currency: DataTypes.STRING,
      recipient: DataTypes.STRING,
      service_id: DataTypes.STRING,
    },
    {
      sequelize,
      underscored: true,
      modelName: "TransactionLog",
      sequelize,
      tableName: "transaction_logs",
    }
  );
  return TransactionLog;
};