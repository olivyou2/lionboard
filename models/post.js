/* eslint-disable no-unused-vars */
const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      author: {
        type: Sequelize.DataTypes.STRING(),
        allowNull: false,
      },

      content: {
        type: Sequelize.DataTypes.STRING(),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: false,
      modelName: 'Post',
      tableName: 'posts',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
  }
};
