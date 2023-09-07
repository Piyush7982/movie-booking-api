'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.show,{
        foreignKey: 'movieId',
        onDelete: 'CASCADE'
      })
    }
  }
  movie.init({
    movieName: {type:DataTypes.STRING,allowNull:false,unique:true},
    language: {type:DataTypes.STRING,allowNull:false}
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};