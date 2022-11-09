const router = require('express').Router()
const { models: { Product }} = require('../db')
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

