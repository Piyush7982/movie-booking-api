"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class show extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.movie, {
        foreignKey: "movieId",
        onDelete: "CASCADE",
      });
      this.belongsTo(models.theatre, {
        foreignKey: "theaterId",
        onDelete: "CASCADE",
      });
    }
  }
  show.init(
    {
      movieId: { type: DataTypes.INTEGER, allowNull: false },
      theaterId: { type: DataTypes.INTEGER, allowNull: false },
      date: { type: DataTypes.DATE },
      availableSeats: { type: DataTypes.INTEGER, allowNull: false },
      costEach: { type: DataTypes.INTEGER, allowNull: false },
      image: { type: DataTypes.STRING, allowNull: true },
    },
    {
      sequelize,
      modelName: "show",
    }
  );
  return show;
};
