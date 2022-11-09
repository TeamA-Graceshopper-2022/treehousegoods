const router = require('express').Router()
const { models: { Order, Order_product, Product }} = require('../db')


module.exports = router

//Route to retrieve all orders
router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll()
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

//Route to retreive an order based on OrderId
router.get('/:id', async (req, res,next) => {
  const {id} = req.params;
  try {
     const orderById = await Order.findByPk(id, {include: [Product]});
     res.send(orderById)
  } catch (err) {
    next(err)
  }
});

//Route to retrieve the order_products within an order based upon order Id
router.get('/:id/order_products', async (req, res, next) => {
  const {id} = req.params;
  try{
    const order_productByOrderId = await Order_product.findAll(
      { where: {
        orderId: id
      }
    },
    )
    res.send(order_productByOrderId);
  } catch (err) {
    next(err)
  }
})

// router.get('/:id/order_products', async (req, res, next) => {
//   const {id} = req.params;
//   try{
//     const order_productByOrderId = await Order.findAll({
//       include: [{
//         model: Product,
//         through: {
//           where: {

//           }
//         }
//       }]
//   })
//     res.send(order_productByOrderId);
//   } catch (err) {
//     next(err)
//   }
// })

