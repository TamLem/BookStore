const fs = require("fs");
const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const Product  = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: Sequelize.STRING,
  author: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.DOUBLE, 
  img: Sequelize.STRING
})

module.exports = Product;