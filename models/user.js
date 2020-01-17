"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {},
  );
  User.associate = function(models) {
    User.hasMany(models.Transaction, { as: "transactions" });
    User.belongsToMany(models.Kelas, {
      through: models.UserKelas,
      foreignKey: "userId",
    });
  };
  return User;
};
