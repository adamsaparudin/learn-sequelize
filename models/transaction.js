"use strict";
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    "Transaction",
    {
      userId: { type: DataTypes.INTEGER, required: true },
      amount: { type: DataTypes.FLOAT, required: true },
    },
    {},
  );
  Transaction.associate = function(models) {
    Transaction.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  };
  return Transaction;
};
