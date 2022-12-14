//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Product = require('./models/Product')
const Order = require('./models/Order')
const Order_product = require('./models/Order_product')


Order.belongsTo(User);
User.hasMany(Order);

Order.belongsToMany(Product, {through: "Order_product"})
Product.belongsToMany(Order, {through: "Order_product"})

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    Order_product
  },
}
