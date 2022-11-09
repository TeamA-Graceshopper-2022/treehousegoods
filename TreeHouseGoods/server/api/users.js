const router = require('express').Router()
const { models: { User, Order }} = require('../db')
module.exports = router

//Route to retrieve all Users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

//Route to retrieve a single user's info
router.get('/:id', async (req, res,next) => {
  const {id} = req.params;
  try {
     const userById = await User.findByPk(id);
     res.send(userById)
  } catch (err) {
    next(err)
  }
});

//Route to retrieve a cart based upon a user's id
router.get('/:id/cart', async (req, res, next) => {
  const {id} = req.params;
  try {
    const cartByUserId = await Order.findAll(
      { where: {
        userId: id,
        status: 'cart'
      }}
    )
    res.send(cartByUserId)
  } catch (err) {
    next(err)
  }
})

//Route to retrieve a completed order based upon a user's id
router.get('/:id/complete', async (req, res, next) => {
  const {id} = req.params;
  try {
    const cartByUserId = await Order.findAll(
      { where: {
        userId: id,
        status: 'complete'
      }}
    )
    res.send(cartByUserId)
  } catch (err) {
    next(err)
  }
})

//Route to create new user when registering an account
router.post('/', async (req, res, next) => {
  try{
    const newUser = await User.create(req.body)
    res.send(newUser)
  } catch (err){
    next(err)
  }
})

