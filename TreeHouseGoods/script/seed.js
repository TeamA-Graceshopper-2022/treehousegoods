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
    User.create({ isAdmin: true, username: 'teamA', password: '123', firstname: 'Team', lastname: 'A', addressSt: '123 USA St', addressCity: 'USA', addressState: 'US', addressZip: '00000', email: 'teama@gmail.com' }),
  ])

  const products = await Promise.all([
    Product.create({ name: 'Oolong Tea', price: 53.99, category: 'tea', desc: "Delicious milky Oolong from high elevatio in Taiwan.", image: "https://images.unsplash.com/photo-1524204169113-3359e888bc3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80", imageAlt: "https://www.floridaoliveoil.com/wp-content/uploads/2017/12/Oolong-Tea.jpeg", inventory: 50 }),
    Product.create({ name: 'Sori Kettle', price: 399.99, category: 'homegood', desc: "Beautiful steel stovetop kettle", image:"https://cdn.shopify.com/s/files/1/0167/5376/products/SoriYanagikettle_web_91c17756-0866-4e2f-851f-7e46dac69dbe_600x800_crop_center.jpg?v=1571438530", imageAlt: "https://images.unsplash.com/photo-1635066522452-67ed18810fbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80", inventory: 250 }),
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
    Product.create({name: 'Indonesia Bies Penantan', price: 90.99, category: 'coffee', desc: "This rich, full-bodied coffee is the result of carefully selected lots prepared and produced by our longtime partners at the women-led Ketiara Cooperative in Aceh, on the island of Sumatra.", image: "https://stumptown-shop.imgix.net/products/STC-Shopify-Indonesia-Bies_Product-Image-Transparent-PNG_EDIT.png?v=1622664702&auto=format,compress&w=750", imageAlt:"", inventory: 500}),
 
 
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
