const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TravelPost extends Model {}

TravelPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    //TODO change the needed_funding to the maps from google api
    // needed_funding: {
    //   type: DataTypes.FLOAT,
    //   allowNull: false,
    // },
    location_map: {
      type: DataTypes.STRING,
      allowNull: false,


    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'TravelPost',
  }
);

module.exports = TravelPost;
