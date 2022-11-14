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

  const coffee = await Promise.all([
    Product.create({name: 'Costa Rican Dark Roast Coffee', price: 14.95, category: 'coffee', desc: "The flavor of Costa Rica! Our classic Dark Roast is a blend of the best beans from Costa Rica's Central and Western Valley growing regions. The Central Valley's sweeter and more acidic beans combine excellently with the Western Valley's dense and full-bodied beans, resulting in a perfectly balanced cup. This blend is dark roasted to bring out its rich profile and noticeably chocolaty aroma.As the darkest roast of all our regular coffees, we're confident that we've managed to capture the flavor of Costa Ricain this blend.", image: "https://www.cafebritt.com/siteimg/us-1/products/fullsize-tile/costa-rican-dark-roast-whole-bean-coffee-front-viewa.jpg?r=02109", imageAlt:"", inventory: 500}),
    Product.create({name: 'Costa Rican Espresso Coffee', price: 14.95, category: 'coffee', desc: "Using a house blend of plump, premium beans from the Central and Western Valley regions of Costa Rica, we've concocted a mildly acidic espresso that yields a rich and foamy crema. As our darkest roast, the flavor notes of dark chocolate are undeniable. Coupled with undertones of apple and wildflowers and aromas of fruit, lightly toasted bread, and caramel, it's no wonder why this blend is one of our best sellers, not only in the US but also in local coffee shops around Costa Rica.", image: "https://www.cafebritt.com/siteimg/us-1/products/fullsize-tile/costa-rican-espresso-whole-bean-coffee-front-view.jpg?r=02109", imageAlt:"", inventory: 200}),
    Product.create({name: 'Costa Rican Organic Coffee', price: 17.95, category: 'coffee', desc: "Sustainably produced, organically farmed.This single-origin blend comes from southern Costa Rica's Brunca growing region, known for the many biological reserves that dot its landscape. The Brunca region boasts abundant vegetation and rich, volcanic soils, which make for ideal growing conditions, and under the shade of natural tree species, coffee plants thrive.", image: "https://www.cafebritt.com/siteimg/us-1/products/fullsize-tile/organic-whole-bean-coffee-front-view.jpg?r=02109", imageAlt:"", inventory: 250}),
    Product.create({name: 'Costa Rican Light Roast Coffee', price: 20.95, category: 'coffee', desc: "Made from a special house blend of Central and Western Valley arabica beans, this light roasted coffee has noticeable fruity and floral notes. Because the Central Valley's beans are grown at high altitudes, they are higher in acidity - a quality that brings out the best aromatic characteristics of a coffee. For this reason, you will notice an aroma of freshly sliced limes that is coupled with a tart acidity upon the first sip. The flavor notes include caramel and apricot and even sometimes a hint of malt.Soft, well-balanced, and full-bodied, this light roast accentuates the best qualities of the blend of beans and makes for an ideal morning cup. This is a 'sophisticated' blend that will maintain its flavor from start to finish.", image: "https://cdn.shopify.com/s/files/1/1756/5057/products/cafe-britt-costa-rica-light-roast-ground_grande.jpg?v=1509123212", imageAlt:"", inventory: 340}),
    Product.create({name: 'Poas Tierra Volcanica Coffee', price: 25.95, category: 'coffee', desc: "From the intense microclimates of the Central Valley region comes our Poas Volcanic Earth coffee. Known as Costa Rica's pioneer coffee region, the Central Valley has harsher weather changes, which in turn allow coffee plantations to grow high-quality hard beans. That, along with volcano-enriched soils and constant rain, makes for a unique coffee-producing environment, which is transmitted to the surprising cup qualities of our Poas Volcanic Earth blend.", image: "https://www.cafebritt.com/siteimg/us-1/products/fullsize-tile/costa-rican-poas-whole-bean-coffee-front-view.jpg?r=02109", imageAlt:"", inventory: 400}),
    Product.create({name: 'Montecielo Gourmet Coffee', price: 30.95, category: 'coffee', desc: "Located southeast of the capital city San José, Tarrazú is known worldwide for producing some of the best tasting coffee. The area is so famous it's called La Cuna del Café Costarricense the area where Costa Rican coffee was born.", image: "https://www.cafebritt.com/siteimg/us-1/products/fullsize-tile/costa-rican-tarrazu-whole-bean-coffee-front-view.jpg?r=02109", imageAlt:"", inventory: 100}),
    Product.create({name: 'French Roast', price: 85.95, category: 'coffee', desc: "This toasty, organic blend redefines what a classic dark roast can be.", image: "https://stumptown-shop.imgix.net/products/STCShopifyFrenchRoast_ProductImageTransparentPNG.png?v=1622143647&auto=format,compress&w=750", imageAlt:"", inventory: 300}),
    Product.create({name: 'Homestead', price: 80.95, category: 'coffee', desc: "Homestead is a light, seasonal, and balanced cup blending our finest Direct Trade coffees. Sweet and delicious, this is one to write home about.", image: "https://stumptown-shop.imgix.net/products/Homestead.png?v=1666027945&auto=format,compress&w=750", imageAlt:"", inventory: 600}),
    Product.create({name: 'Hair Bender', price: 90.95, category: 'coffee', desc: "The sweet and balanced coffee that started it all. Hair Bender is our most celebrated blend with a flavor profile that shines no matter how you brew it.", image: "https://stumptown-shop.imgix.net/products/STCShopifyHairbender_ProductImageTransparentPNG.png?v=1622143999&auto=format,compress&w=750", imageAlt:"", inventory: 200}),
    Product.create({name: 'Hundred Mile', price: 85.99, category: 'coffee', desc: "Hundred Mile is a pleasant, balanced blend of certified organic coffees that will cut a clean line right through your day, no matter what time you get things started.", image: "https://stumptown-shop.imgix.net/products/Hundred_Mile_Product_1.png?v=1649954755&auto=format,compress&w=750", imageAlt:"", inventory: 400}),
    Product.create({name: 'Indonesia Bies Penantan', price: 90.99, category: 'coffee', desc: "This rich, full-bodied coffee is the result of carefully selected lots prepared and produced by our longtime partners at the women-led Ketiara Cooperative in Aceh, on the island of Sumatra.", image: "https://stumptown-shop.imgix.net/products/STC-Shopify-Indonesia-Bies_Product-Image-Transparent-PNG_EDIT.png?v=1622664702&auto=format,compress&w=750", imageAlt:"", inventory: 500})
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
