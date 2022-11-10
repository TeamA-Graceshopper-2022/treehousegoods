const router = require('express').Router()
const { models: { Product, Order_product }} = require('../db')
module.exports = router

//Route to retreive all products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
});

//Route to retreive a product based upon the product's Id
router.get('/:id', async (req, res,next) => {
  const {id} = req.params;
  try {
     const productById = await Product.findByPk(id);
     res.send(productById)
  } catch (err) {
    next(err)
  }
});

//Route to retreive the order_product by Product's id
router.get('/:id/order_products', async (req, res, next) => {
  const {id} = req.params;
  try{
    const order_productByProductId = await Order_product.findAll(
      { where: {
        productId: id
      }
    },
    )
    res.send(order_productByProductId);
  } catch (err) {
    next(err)
  }
})

//Route to retreive product's by their respective category
router.get('/:category', async (req, res, next) => {
  const { category } = req.params;
  try{
    const productByCategory = await Product.findAll({where: {
      category: category
    }})
    res.send(productByCategory)
  } catch (err) {
    next(err)
  }
})