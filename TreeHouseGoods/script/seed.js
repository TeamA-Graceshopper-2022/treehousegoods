'use strict'

const {db, models: {User, Product, Order, Order_product} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123', firstname: 'Cody', lastname: 'Franklin', addressSt: '789 Dash St', addressCity: 'New York City', addressState: 'NY', addressZip: '00000', email: 'cody@gmail.com' }),
    User.create({ username: 'murphy', password: '123', firstname: 'Murphy', lastname: 'Doe', addressSt: '987 Dash St', addressCity: 'Dover', addressState: 'DE', addressZip: '00000', email: 'murphy@gmail.com' }),
    User.create({ username: 'remi', password: '123', firstname: 'Remi', lastname: 'Dog', addressSt: '555 Dash St', addressCity: 'Miami', addressState: 'FL', addressZip: '33132', email: 'remi@gmail.com' }),
  ])

  const products = await Promise.all([
    Product.create({ name: 'Oolong Tea', price: 53.99, category: 'tea', desc: "Delicious milky Oolong from high elevatio in Taiwan.", image: "https://images.unsplash.com/photo-1524204169113-3359e888bc3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80", imageAlt: "https://www.floridaoliveoil.com/wp-content/uploads/2017/12/Oolong-Tea.jpeg", inventory: 50 }),
    Product.create({ name: 'Sori Kettle', price: 399.99, category: 'homegood', desc: "Beautiful steel stovetop kettle", image: "https://images.unsplash.com/photo-1635066522452-67ed18810fbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80", imageAlt: "", inventory: 250 }),
    Product.create({ name: 'Green Tea', price: 24.99, category: 'tea', desc: "Japanese Green Tea", image: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/02/green-tea.jpg?quality=82&strip=1", imageAlt: "", inventory: 45 }),
    Product.create({ name: 'Phalaenopsis Orchid', price: 30.99, category: 'plant', desc: "Elegant white orchid bloom.", image: "https://res.cloudinary.com/ufn/image/upload/c_pad,f_auto,fl_progressive,h_500,w_445/mkxrvxkdaboxn6xjq5f4.jpg", imageAlt: "", inventory: 200 }),
    Product.create({ name: 'Jade Plant', price: 16.99, category: 'plant', desc: "Jade plants require medium/low light. Requires decent amount of water.", image: "https://images.unsplash.com/photo-1523362289600-a70b4a0e09aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFkZSUyMHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", imageAlt: "", inventory: 100 }),

    //Homegoods
    Product.create({ name: 'Wall Shelves', price: 36.99, category: 'homegood', desc: "Rustic Wood Floating Shelves for Wall Decor", image: "https://images.unsplash.com/photo-1516650198585-d029a68fc0dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29vZGVuJTIwd2FsbCUyMHNoZWx2ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60", imageAlt: "", inventory: 100 }),
    Product.create({ name: 'Mason Jar Collection', price: 54.99, category: 'homegood', desc: "For your flowers or food storage. Zero waste & Sustainability.", image: "https://images.unsplash.com/photo-1531112998639-59af23e7a65e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmludGFnZSUyMGphcnN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60", imageAlt: "", inventory: 100 }),
    Product.create({ name: 'Copper Pour Over Set ', price: 299.99, category: 'homegood', desc: "Copper Coated Pour Over Coffee Dripper - Paperless Filter - Reusable & Ecofriendly - Honeycomb Design Dripper .", image: "https://images.unsplash.com/photo-1517466996322-2668610a3309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvcHBlciUyMHBvdHN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60", imageAlt: "", inventory: 100 }),
    Product.create({ name: 'Rustic Lights', price: 24.99, category: 'homegood', desc: "Let String lights set the mood. Great to pair with a lantern to warm up your cozy space. ", image: "https://i.pinimg.com/564x/93/df/74/93df74291b6ca533c8e1563a10af6971.jpg", imageAlt: "", inventory: 100 }),
    Product.create({ name: 'Patterned Blanket', price: 166.99, category: 'homegood', desc: "Cozy up with some tea and read a book. Mix and match with different textures and pillows.", image: "https://images.unsplash.com/photo-1538577880403-f9998e75dd06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym9oZW1pYW4lMjBibGFua2V0fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=900&q=60", imageAlt: "", inventory: 100 }),
    Product.create({ name: 'Woven Basket', price: 33.99, category: 'homegood', desc: "Handwoven seagrass. Storage Baskets for Organizing.", image: "https://images.unsplash.com/photo-1548425910-d7a6e72fd5ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2lja2VyJTIwYmFza2V0fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=900&q=60", imageAlt: "", inventory: 100 }),
    Product.create({ name: 'Autumn Candle', price: 46.99, category: 'homegood', desc: "Set the ambience with this autumn scent.", image: "https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNvenklMjB3b29sJTIwYmxhbmtldHxlbnwwfDF8MHx8&auto=format&fit=crop&w=900&q=60", imageAlt: "", inventory: 100 }),
    Product.create({ name: 'Rattan Accent Chair', price: 139.99, category: 'homegood', desc: "Natural and modern aesthetics are woven seamlessly together in these chairs. Handwoven rattan is perfect for treehouse casual.", image: "https://images.unsplash.com/photo-1588706838478-acc49b5d9fcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmF0dGFuJTIwZnVybml0dXJlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=900&q=60", imageAlt: "", inventory: 100 }),
    Product.create({ name: 'Vintage Mirror', price: 349.99, category: 'homegood', desc: "Use an antique mirror as the focal point of your bohemian design.", image: "https://images.unsplash.com/photo-1615800002200-1f683abbf31e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", imageAlt: "", inventory: 100 }),
    Product.create({ name: 'Fringed Hammock', price: 75.99, category: 'homegood', desc: "Nothing says relaxation like a hammock. A fringed hammock turns a spot by the window into the worlds most stylish meditation nook ever.", image: "https://i.pinimg.com/564x/76/1c/b8/761cb8b5877a2fef6bf82a2c9935a13e.jpg", imageAlt: "", inventory: 100 }),
    Product.create({ name: 'Apothecary Shelf', price: 75.99, category: 'homegood', desc: "A place to collect treasures from the forest.", image: "https://i.etsystatic.com/9685741/r/il/5ec98f/3018225952/il_1588xN.3018225952_6bb1.jpg", imageAlt: "", inventory: 100 }),
  
  ])

  const orders = await Promise.all([
    Order.create({ userId: 1, status: 'cart',}),
    Order.create({ userId: 2, status: 'cart',})
  ])

  const Order_products = await Promise.all([
    Order_product.create({ quantity: 1, price: 25.00, orderId: 1, productId: 2}),
    Order_product.create({quantity: 1, price: 24.00, orderId: 2, productId: 4})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
