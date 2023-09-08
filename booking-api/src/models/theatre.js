'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class theatre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.city,
        {foreignKey:'cityId'})
      this.hasOne(models.show,{
        foreignKey: 'theaterId',
        onDelete: 'CASCADE'
      })
      
    }
  }
  theatre.init({
    theatreName: {
      allowNull:false,
      type:DataTypes.STRING
      // ,get() {
      //   const rawValue = this.getDataValue('theatreName');
      //   return rawValue ? rawValue.toUpperCase() : null;
      // }
    },
    cityId:{
      allowNull:false,
      type:DataTypes.INTEGER
    },
    totalSeat: {
      allowNull:false,
      type:DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'theatre',
  });
  return theatre;
};