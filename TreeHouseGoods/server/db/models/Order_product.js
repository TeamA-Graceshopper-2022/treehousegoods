const Sequelize = require('sequelize')
const db = require('../db')

const Order_product = db.define('Order_product', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.DOUBLE,
  },
})

module.exports = Order_product