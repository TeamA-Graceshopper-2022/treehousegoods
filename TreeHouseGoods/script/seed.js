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
    Product.create({ name: 'Junzo Red Clay Tokoname Japanese Teapot', price: 319.00, category: 'tea', desc: 'This teapot set is made of red clay, known as one of the characteristics of Tokoname ware. Tokoname red clay is a clay containing iron oxide suitable for pottery, and is characterized by a soft vermilion color when fired. Because no glaze is used, the clay itself absorbs the light and gives the pottery a moist texture that makes you want to touch it. Finished on the potters wheel in a thin and elegant form, allowing you to appreciate the high level of skill and the quality of the clay used.', image: 'https://cdn.shopify.com/s/files/1/0553/0461/8173/products/junzo-red-clay-tokoname-japanese-teapot-set-88oz260ml-sasame-and-ceramesh-musubi-kiln-handmade-japanese-tableware-and-japanese-dinnerware-836048_1000x.jpg?v=1654483376'}),
    Product.create({name: 'Orange Pour Over Coffee Set', price: 40.00, category: 'coffee', desc: 'Our new style has helps make better tasting coffee by adding space between the filter and the coffee maker. Our pour over set is a must-have set for coffee lovers. Fun, unique, and beautiful. Handcrafted to perfection with special blown glass method while using the best materials. At VB, it is our goal to bring beauty and mindfulness to your home through our creative designs. This collection is a part of this mission. Enjoy as a new home essential or give a thoughtful present for that important someone.', image: 'https://i.etsystatic.com/22997119/r/il/5a321f/3101587042/il_1588xN.3101587042_cw5w.jpg'}),
    Product.create({name: 'Ippodo Matcha Tea', price: 32.00, category: 'tea', desc: 'Characterized by its rich aroma, full-bodied mellow sweetness, and vivid green color, matcha is a favorite among tea lovers in Japan. Ground from shade-cultivated tea leaves, matcha is rich in theanine -- an amino acid responsible for matchas umami (translates to “savory deliciousness” and is also known as the fifth taste).', image: 'https://cdn.shopify.com/s/files/1/0012/4072/7612/products/ippodo-matcha-tea-454014_1680x.jpg?v=1594333935'}),
    Product.create({name: 'Ippodo Tea (variety pack)', price: 50.00, category: 'tea', desc: 'From the vast variety of teas currently offered by Ippodo, this selection of a few from Ippodos most popular selections, for our tea-loving community: Hosen Sencha (100 g - premium loose leaf green tea. Higher grade, younger tea leaf. Great for green tea lovers who want a more premium taste for the right occasion), Matsuo Midori Sencha (120 g - basic loose leaf green tea. Delicious and great for everyday drinking for green tea lovers), Gokujo Genmai Cha (100 g - loose leaf green tea with toasted rice. Earthy aroma with popcorn-like taste), Gokujo Hoji Cha (100 g - loose leaf roasted green tea. Recommended for people who want less caffeine and like English tea), Mugicha Barley tea (400 g - caffeine-free, you can enjoy it cold after brewing. Great tea with a fresh taste for warmer summer days), Iribancha (150 g - smoked loose leaf green tea with a strong smokey aroma. Caffeine-free, even suitable for children. A very traditional tea served in Kyoto)', image: 'https://cdn.shopify.com/s/files/1/0012/4072/7612/products/ippodo-tea-722269_1680x.jpg?v=1594333938'}),
    Product.create({name: 'Red Gaiwan', price: 35.00, category: 'tea', desc: 'This small cup comes with a lid and saucer and is used especially for infusing large leaf teas. The leaves are infused directly and the lid holds them back when the tea is ready to pour. This allows the leaves to be saved for multiple infusions, thus concentrating the flavours and aromas for each cup.', image: 'https://live.staticflickr.com/628/21260125529_770ab785db.jpg'}),
    Product.create({name: 'Kung Fu Tea Set', price: 40.00, category: 'tea', desc: 'Bamboo and Tea Tray, Kung Fu Tea Table, Tray with Water Basin, Tea Ceremony Table. The top is hardened bamboo, giving it a beautiful color and easy drying. Place your favorite kung fu teapot, teacups and accessories on this delightful bamboo and ceramic tea tray for easy draining while you enjoy the full kung fu tea experience.', image: 'https://i.etsystatic.com/27024275/r/il/7d467b/3960257212/il_1588xN.3960257212_l2ht.jpg'}),
    Product.create({name: 'Premium Jin Xuan Milk Oolong Tea', price: 38.00, category: 'tea', desc: 'Spring harvest Jin Xuan tea grown on Tai Hua Mountain in Anxi county of Fujian.  Taiwanese Jin Xuan varietal tea growing at an altitude of 1100 meters is expertly hand-picked and processed in the traditional method.', image: 'https://cdn.shopify.com/s/files/1/0586/9817/products/1_9b13de4d-8058-410b-b9f3-7b152af81fcb_1200x1200.jpg?v=1626359650'}),
    Product.create({name: 'Puer Tea', price: 50.00, category: 'tea', desc: 'Puer tea cake.', image: 'https://journal.rishi-tea.com/wp-content/uploads/2020/05/Shu_PuerhTeaCake_LG.jpg'}),
    Product.create({name: 'Black Tea', price: 0, category: 'tea', desc: 'Energizing Black Tea with the intoxicating taste of vanilla', image: 'https://dhb3yazwboecu.cloudfront.net/1007/fotosProducto/tes/10110_VanillaBlackTea_1000x1000_l.jpg'}),
    Product.create({name: 'Chrysanthemum Tea', price: 35.00, category: 'tea', desc: 'Chrysanthemum tea is a flower-based infusion beverage made from the chrysanthemum flowers.', image: 'https://thewoksoflife.com/wp-content/uploads/2018/03/chrysanthemum-tea-5.jpg'}),
    Product.create({name: 'White Tea', price: 23.00, category: 'tea', desc: 'Widely esteemed for its delicate appearance, elegant sweetness and noble character, Silver Needles tea is comprised of pure, individually plucked tea buds harvested only in the early springtime. Our Silver Needles is unique in that it is sourced from Menghai and Mengku broad leaf varietal ancient tea tree groves in the remote, mountainous Yunnan Province of China. Like old grape vines, ancient tea trees yield complexities not found in other tea cultivars. This teas sweet, nectar-like flavor and fruity aroma are examples of that varietal expression. Silver Needles is exceedingly rare and beloved by tea connoisseurs.', image: 'https://rishi-tea.com/product/image/medium/osnp-sana_silver-needles-organic-loose-leaf-bai-hao-yin-zhen-chinese-white-tea.jpg'}),
    Product.create({name: 'Organic Japanese Green Tea Powder', price: 20.00, category: 'tea', desc: 'The traditional cultivation of tencha requires shading the tea garden for 3-4 weeks prior to harvest. This elevates chlorophyll and enhances L-theanine and other stimulating amino acids responsible for matchas unique bounty of energy.', image: 'https://rishi-tea.com/product/image/medium/omatsf100-rp_barista-matcha-everday-organic-powder-japanese-green-tea.jpg'}),
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
