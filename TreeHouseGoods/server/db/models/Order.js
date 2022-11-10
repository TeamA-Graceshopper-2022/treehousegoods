const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
    status: {
        type: Sequelize.ENUM(['cart', 'complete']),
        allowNull: false,
        defaultValue: 'cart'
      }
})

module.exports = Order;