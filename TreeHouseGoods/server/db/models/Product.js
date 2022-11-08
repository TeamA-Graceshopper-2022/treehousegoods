const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  category: {
    type: Sequelize.ENUM(["tea", "coffee", "homegood", "plant"]),
    allowNull: false
  },
  desc: {
    type: Sequelize.STRING(1000),
  },
  image: {
    type: Sequelize.TEXT,
  },
  imageAlt: {
    type: Sequelize.TEXT,
  },
  inventory: {
    type: Sequelize.INTEGER
  }
})

module.exports = Product