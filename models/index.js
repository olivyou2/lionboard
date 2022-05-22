const Sequelize = require('sequelize');
const Post = require('./post');
const User = require('./user'); // 1

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.sequelize = sequelize;
User.init(sequelize);
User.associate(db);

Post.init(sequelize);
Post.associate(db);

module.exports = db;
