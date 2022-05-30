/* eslint-disable no-unused-vars */
const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      email: {
        type: Sequelize.DataTypes.STRING(),
        allowNull: false,
      },

      password: {
        type: Sequelize.DataTypes.STRING(),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
  }
};
