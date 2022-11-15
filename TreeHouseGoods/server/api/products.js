const router = require('express').Router()
const { TokenExpiredError } = require('jsonwebtoken');
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

//Route to retreive product's by their respective category
router.get('/cat/:category', async (req, res, next) => {
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

// Route to add product
router.post('/', async (req,res,next) => {
  try{
    const newProduct = await Product.create(req.body)
    res.send(newProduct)
  }catch(err){
    next(err)
  }
} )

// Route to edit product
router.put('/:id', async (req,res,next) => {
  try{
    const editProduct = await Product.findByPk(req.params.id)
    res.send(await editProduct.update(req.body))
  }catch(err){
    next(err)
  }
})

// Route to delete product
router.delete('/:id', async (req,res,next)=>{
  try{
    const { id } = req.params
    const deleteProduct = await Product.findByPk(id)
    res.send(await deleteProduct.destroy())
  }catch(err){
    next(err)
  }
})
