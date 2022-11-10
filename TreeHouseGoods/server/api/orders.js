const router = require('express').Router()
const { models: { Order, Order_product, Product } } = require('../db')


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

//Route to retrieve a completed order to be shown in Order History
router.get('/history/:id', async (req, res, next) => {
  const {id} = req.params;
  try{
    const completeOrder = await Order.findAll({where: {id: id, status: 'complete'}, include: [Product]})
    res.send(completeOrder);
  } catch (err){
    next(err)
  }
})

//Route to retreive an order based on OrderId
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const orderById = await Order.findByPk(id, { include: [Product] });
    res.send(orderById)
  } catch (err) {
    next(err)
  }
});



//Route to retrieve the order_products within an order based upon order Id
router.get('/:id/order_products', async (req, res, next) => {
  const { id } = req.params;
  try {
    const order_productByOrderId = await Order_product.findAll(
      {
        where: {
          orderId: id
        }
      },
    )
    res.send(order_productByOrderId);
  } catch (err) {
    next(err)
  }
})

// create a new cart
router.post("/order", async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body);
    res.send(newOrder);
  } catch (err) {
    console.log("an error has occured with the post route")
  }
});

//Creating a new order_product (item within a cart)
router.post("/cart", async (req, res, next) => {
  try {
    const cartItem = await Order_product.create(req.body);
    res.send(cartItem);
  } catch (err) {
    console.log("an error has occured with the post cart route")
    next(err)
  }
});


//Update the status of a cart to be a completed order
router.put('/:id', async (req, res) => {
  const cartUpdate = await Order.findByPk(req.params.id)
  if (!cartUpdate) {
    res.status(404).send('No Cart Found')
    return
  }
  res.send(await cartUpdate.update({status: 'complete', where:{status: 'cart'}}))
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

