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
  ])

  const products = await Promise.all([
    Product.create({ name: 'Oolong Tea', price: 53.99, category: 'tea', desc: "Delicious milky Oolong from high elevatio in Taiwan.", image: "https://images.unsplash.com/photo-1524204169113-3359e888bc3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80", imageAlt: "https://www.floridaoliveoil.com/wp-content/uploads/2017/12/Oolong-Tea.jpeg", inventory: 50 }),
    Product.create({ name: 'Sori Kettle', price: 399.99, category: 'homegood', desc: "Beautiful steel stovetop kettle", image: "https://cdn.shopify.com/s/files/1/0167/5376/products/SoriYanagikettle_web_91c17756-0866-4e2f-851f-7e46dac69dbe_1900x1900.jpg?v=1571438530", imageAlt: "", inventory: 250 }),
    Product.create({ name: 'Green Tea', price: 24.99, category: 'tea', desc: "Japanese Green Tea", image: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/02/green-tea.jpg?quality=82&strip=1", imageAlt: "", inventory: 45 }),
    Product.create({ name: 'Phalaenopsis Orchid', price: 30.99, category: 'plant', desc: "Elegant white orchid bloom.", image: "https://res.cloudinary.com/ufn/image/upload/c_pad,f_auto,fl_progressive,h_500,w_445/mkxrvxkdaboxn6xjq5f4.jpg", imageAlt: "", inventory: 200 }),
    Product.create({ name: 'Jade Plant', price: 16.99, category: 'plant', desc: "Jade plants require medium/low light. Requires decent amount of water.", image: "https://images.unsplash.com/photo-1523362289600-a70b4a0e09aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFkZSUyMHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", imageAlt: "", inventory: 100 }),
    Product.create({ name: 'Bonsai Tree', price: 44.99, category: 'plant', desc: "A miniature tree that requires unique care and cultivation techniques. Bonsai Trees require medium light and a decent amount of water.", image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Pescia%2C_museo_del_bonsai%2C_punica_granatum%2C_stile_moyogi_%28eretto_informale%29%2C_con_frutti.jpg", imageAlt: "", inventory: 100 }),
    Product.create({ name: 'Fig Tree', price: 149.99, category: 'plant', desc: "A simple, yet towering plant. Fig trees require a high amount of light but only a little amount of water.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRijZ4L0T27tG4DZ98WHFAi5uIt2npUsg493lyTz25r9vIYj9Td4GtN0PABsceDBARnM&usqp=CAU", imageAlt: "", inventory: 100 }),
    Product.create({ name: 'Peace Lily', price: 30.99, category: 'plant', desc: "A peaceful plant that comes in a range of sizes. Peace lilies require medium/low light and a small amount of water.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPDPAPG6zSWZrec9CiS9tsNXu7y_4iPSNDA&usqp=CAU", imageAlt: "", inventory: 100 }),
    Product.create({ name: 'Castiron Plant', price: 78.99, category: 'plant', desc: "An undemanding plant that provides a sense of solace. Castiron plants require medium light and a decent amount of water.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVrm_AGhVrfGru5oAhAv_TmrThHqyXNU_Glg&usqp=CAU", imageAlt: "", inventory: 100 }),
    Product.create({ name: 'Lemon Tree', price: 115.99, category: 'plant', desc: "Perfect for the backyard or deck, Lemon Trees require a high amount of light and a decent amount of water.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiIr0zs-q9_kK6uGvhKD3Y9oA7C_XiMzs5_A&usqp=CAU", imageAlt: "", inventory: 100 }),
    Product.create({ name: 'Snake Plant', price: 20.99, category: 'plant', desc: "A distinctive, budding plant that requires a high amount of light and water.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwgspTsKcXSKwTyZH6hrRWRfqm_xbl8Oaaog&usqp=CAU", imageAlt: "", inventory: 100 }),
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
