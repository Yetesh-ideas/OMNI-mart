
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  description: string;
  discount?: number;
  originalPrice?: number;
}

const products: Product[] = [
  // Original products with updated image URLs or fixing broken ones
  {
    id: 1,
    name: "OnePlus Nord CE 3 Lite 5G (Chromatic Grey, 8GB RAM, 128GB Storage)",
    price: 299.99,
    originalPrice: 349.99,
    discount: 14,
    image: "https://m.media-amazon.com/images/I/71AvQd3VzqL._AC_UL320_.jpg",
    category: "Electronics",
    rating: 4.5,
    description: "OnePlus Nord CE 3 Lite 5G with 8GB RAM and 128GB Storage in Chromatic Grey. Features a 6.72 inch display and 108MP main camera."
  },
  {
    id: 2,
    name: "Samsung Galaxy M34 5G (Prism Silver, 6GB, 128GB Storage)",
    price: 249.99,
    originalPrice: 279.99,
    discount: 10,
    image: "https://m.media-amazon.com/images/I/41IiAvUQFqL._AC_UL320_.jpg",
    category: "Electronics",
    rating: 4.3,
    description: "Samsung Galaxy M34 5G with 6GB RAM and 128GB Storage in Prism Silver. Features a 6.5 inch Super AMOLED display and 50MP triple camera setup."
  },
  {
    id: 3,
    name: "Apple AirPods Pro (2nd Generation) with Active Noise Cancellation",
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UL320_.jpg",
    category: "Electronics",
    rating: 4.7,
    description: "Apple AirPods Pro (2nd Generation) with Active Noise Cancellation, Spatial Audio, and Adaptive Transparency. Up to 6 hours of listening time."
  },
  {
    id: 4,
    name: "Men's Cotton Casual Shirt - Slim Fit, Full Sleeves",
    price: 24.99,
    originalPrice: 39.99,
    discount: 37,
    image: "https://m.media-amazon.com/images/I/71cFpnm0b6S._AC_UL320_.jpg",
    category: "Fashion",
    rating: 4.1,
    description: "Men's Cotton Casual Shirt with Slim Fit and Full Sleeves. Available in multiple colors and sizes."
  },
  {
    id: 5,
    name: "Prestige Electric Kettle (1.5 Litre) with Auto Shut-off",
    price: 29.99,
    originalPrice: 39.99,
    discount: 25,
    image: "https://m.media-amazon.com/images/I/51DGcy8eBCL._AC_UL320_.jpg",
    category: "Home & Kitchen",
    rating: 4.2,
    description: "Prestige Electric Kettle with 1.5 Litre capacity and Auto Shut-off feature. Stainless steel body with 1500W power for quick heating."
  },
  {
    id: 6,
    name: "Noise ColorFit Pro 3 Smart Watch with Heart Rate Monitor",
    price: 49.99,
    originalPrice: 79.99,
    discount: 37,
    image: "https://m.media-amazon.com/images/I/61xzuXWWozS._AC_UL320_.jpg",
    category: "Electronics",
    rating: 4.0,
    description: "Noise ColorFit Pro 3 Smart Watch with Heart Rate Monitor, SpO2 Measurement, and 14 Sports Modes. 1.55 inch display with customizable watch faces."
  },
  {
    id: 7,
    name: "Women's Embroidered Kurta with Palazzo Set",
    price: 34.99,
    originalPrice: 49.99,
    discount: 30,
    image: "https://m.media-amazon.com/images/I/61ySJr+KblL._AC_UL320_.jpg",
    category: "Fashion",
    rating: 4.4,
    description: "Women's Embroidered Kurta with Palazzo Set. Made with premium cotton fabric, perfect for casual and festive wear."
  },
  {
    id: 8,
    name: "Bosch 7kg Fully-Automatic Front Loading Washing Machine",
    price: 499.99,
    originalPrice: 599.99,
    discount: 16,
    image: "https://m.media-amazon.com/images/I/518M07WVYZL._AC_UL320_.jpg",
    category: "Home & Kitchen",
    rating: 4.6,
    description: "Bosch 7kg Fully-Automatic Front Loading Washing Machine with 15 Wash Programs. Energy efficient with 1200 RPM spin speed."
  },
  {
    id: 9,
    name: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
    price: 249.99,
    originalPrice: 349.99,
    discount: 28,
    image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UL320_.jpg",
    category: "Electronics",
    rating: 4.8,
    description: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones with up to 30 hours battery life, touch controls, and superior sound quality."
  },
  {
    id: 10,
    name: "HP 14 Laptop, Intel Core i5, 8GB RAM, 256GB SSD",
    price: 499.99,
    originalPrice: 599.99,
    discount: 16,
    image: "https://m.media-amazon.com/images/I/71RD3bKQJcL._AC_UL320_.jpg",
    category: "Electronics",
    rating: 4.4,
    description: "HP 14 Laptop with Intel Core i5 processor, 8GB RAM, 256GB SSD storage, and 14-inch Full HD display. Perfect for work and entertainment."
  },
  {
    id: 11,
    name: "Samsung 32-inch Smart HD TV with Built-in Wi-Fi",
    price: 189.99,
    originalPrice: 229.99,
    discount: 17,
    image: "https://m.media-amazon.com/images/I/71LJJrKbezL._AC_UL320_.jpg",
    category: "Electronics",
    rating: 4.2,
    description: "Samsung 32-inch Smart HD TV with built-in Wi-Fi, multiple connectivity options, and access to popular streaming services."
  },
  {
    id: 12,
    name: "Logitech MX Master 3 Advanced Wireless Mouse",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    image: "https://m.media-amazon.com/images/I/61AjXOl5flL._AC_UL320_.jpg",
    category: "Electronics",
    rating: 4.7,
    description: "Logitech MX Master 3 Advanced Wireless Mouse with ultra-fast scrolling, customizable buttons, and compatibility with multiple devices."
  },
  {
    id: 13,
    name: "Women's Banarasi Silk Saree with Blouse Piece",
    price: 59.99,
    originalPrice: 89.99,
    discount: 33,
    image: "https://m.media-amazon.com/images/I/91WvnZ0HqtL._AC_UL320_.jpg",
    category: "Fashion",
    rating: 4.5,
    description: "Women's Banarasi Silk Saree with Blouse Piece, featuring elegant design and premium quality fabric. Perfect for parties and special occasions."
  },
  {
    id: 14,
    name: "Men's Leather Formal Shoes - Black, Brown",
    price: 39.99,
    originalPrice: 59.99,
    discount: 33,
    image: "https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL320_.jpg",
    category: "Fashion",
    rating: 4.3,
    description: "Men's Leather Formal Shoes with durable construction, comfortable padding, and classic design. Available in Black and Brown colors."
  },
  {
    id: 15,
    name: "Women's Handbag - PU Leather, Spacious Design",
    price: 29.99,
    originalPrice: 45.99,
    discount: 34,
    image: "https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UL320_.jpg",
    category: "Fashion",
    rating: 4.2,
    description: "Women's Handbag made with high-quality PU leather, featuring spacious compartments, secure zip closure, and adjustable straps."
  },
  {
    id: 16,
    name: "Unisex Cotton Graphic T-Shirts - Pack of 3",
    price: 24.99,
    originalPrice: 34.99,
    discount: 28,
    image: "https://m.media-amazon.com/images/I/71UXNEErYKL._AC_UL320_.jpg",
    category: "Fashion",
    rating: 4.0,
    description: "Unisex Cotton Graphic T-Shirts in a pack of 3, featuring comfortable fit, trendy designs, and premium quality fabric that's soft and durable."
  },
  {
    id: 17,
    name: "Non-Stick Cookware Set - 4 Piece Set",
    price: 59.99,
    originalPrice: 79.99,
    discount: 25,
    image: "https://m.media-amazon.com/images/I/71hE9ot6UHL._AC_UL320_.jpg",
    category: "Home & Kitchen",
    rating: 4.3,
    description: "Non-Stick Cookware Set including 4 pieces with heat-resistant handles, dishwasher safe design, and even heat distribution technology."
  },
  {
    id: 18,
    name: "Automatic Front Load Washing Machine - 6.5 kg",
    price: 349.99,
    originalPrice: 429.99,
    discount: 18,
    image: "https://m.media-amazon.com/images/I/61GtHhYuf2L._AC_UL320_.jpg",
    category: "Home & Kitchen",
    rating: 4.4,
    description: "Automatic Front Load Washing Machine with 6.5 kg capacity, multiple wash programs, energy-efficient design, and smart diagnostics."
  },
  {
    id: 19,
    name: "Microwave Oven with Grill - 28L",
    price: 129.99,
    originalPrice: 159.99,
    discount: 18,
    image: "https://m.media-amazon.com/images/I/71nJxZ9AUrL._AC_UL320_.jpg",
    category: "Home & Kitchen",
    rating: 4.5,
    description: "Microwave Oven with Grill functionality, 28L capacity, multiple cooking presets, and easy-to-clean interior with child lock safety feature."
  },
  {
    id: 20,
    name: "Cotton Bedsheet with 2 Pillow Covers - King Size",
    price: 24.99,
    originalPrice: 34.99,
    discount: 28,
    image: "https://m.media-amazon.com/images/I/710L8OpWIML._AC_UL320_.jpg",
    category: "Home & Kitchen",
    rating: 4.1,
    description: "Cotton Bedsheet with 2 Pillow Covers in King Size, featuring premium quality fabric, vibrant colors, and shrink-resistant properties."
  },
  {
    id: 21,
    name: "Lakme 9 to 5 Primer + Matte Lipstick",
    price: 7.99,
    originalPrice: 9.99,
    discount: 20,
    image: "https://m.media-amazon.com/images/I/71wuOeT+DIL._SX679_.jpg",
    category: "Beauty",
    rating: 4.4,
    description: "Lakme 9 to 5 Primer + Matte Lipstick delivers intense color payoff with a comfortable matte finish that lasts all day long."
  },
  {
    id: 22,
    name: "Maybelline New York Fit Me Matte + Poreless Foundation",
    price: 8.99,
    originalPrice: 11.99,
    discount: 25,
    image: "https://m.media-amazon.com/images/I/61toIdeKVLL._SX679_.jpg",
    category: "Beauty",
    rating: 4.3,
    description: "Maybelline New York Fit Me Matte + Poreless Foundation is a liquid foundation that mattifies and refines pores for a natural, seamless finish."
  },
  {
    id: 23,
    name: "Forest Essentials Facial Ubtan - 50g",
    price: 19.99,
    originalPrice: 24.99,
    discount: 20,
    image: "https://m.media-amazon.com/images/I/61cknhz0ZLL._SX679_.jpg",
    category: "Beauty",
    rating: 4.6,
    description: "Forest Essentials Facial Ubtan is a natural cleanser made with turmeric, sandalwood, and other Ayurvedic ingredients for radiant skin."
  },
  {
    id: 24,
    name: "Nivea Body Lotion for Very Dry Skin - 400ml",
    price: 6.99,
    originalPrice: 8.99,
    discount: 22,
    image: "https://m.media-amazon.com/images/I/61zYM9e0HkL._SX679_.jpg",
    category: "Beauty",
    rating: 4.5,
    description: "Nivea Body Lotion for Very Dry Skin provides deep moisture and nourishment for 48 hours, leaving skin soft and smooth."
  },
  {
    id: 25,
    name: "The Psychology of Money by Morgan Housel",
    price: 12.99,
    originalPrice: 16.99,
    discount: 23,
    image: "https://m.media-amazon.com/images/I/71J3+5lrCKL._AC_UY327_FMwebp_QL65_.jpg",
    category: "Books",
    rating: 4.7,
    description: "The Psychology of Money explores how people make decisions around money and teaches you how to think about wealth building as a skill anyone can develop."
  },
  {
    id: 26,
    name: "Ikigai: The Japanese Secret to a Long and Happy Life",
    price: 14.99,
    originalPrice: 19.99,
    discount: 25,
    image: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg",
    category: "Books",
    rating: 4.6,
    description: "Ikigai reveals how the Japanese find purpose in everything they do, weaving together the disciplines of proper nutrition, exercise, mindfulness and connection."
  },
  {
    id: 27,
    name: "Atomic Habits by James Clear",
    price: 13.99,
    originalPrice: 17.99,
    discount: 22,
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY327_FMwebp_QL65_.jpg",
    category: "Books",
    rating: 4.8,
    description: "Atomic Habits offers a proven framework for improving every day by teaching readers how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results."
  },
  {
    id: 28,
    name: "Rich Dad Poor Dad by Robert Kiyosaki",
    price: 9.99,
    originalPrice: 14.99,
    discount: 33,
    image: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY327_FMwebp_QL65_.jpg",
    category: "Books",
    rating: 4.5,
    description: "Rich Dad Poor Dad explains the differences in mindsets between the rich and the poor, teaching readers how to think about money and investing in a way that can help them achieve financial freedom."
  },
  // New products
  {
    id: 29,
    name: "Apple iPad Air (5th Generation) 256GB Wi-Fi",
    price: 699.99,
    originalPrice: 849.99,
    discount: 18,
    image: "https://m.media-amazon.com/images/I/61XZQXFQeVL._AC_UY218_.jpg",
    category: "Electronics",
    rating: 4.8,
    description: "Experience incredible power and versatility with the iPad Air featuring the M1 chip, 10.9-inch Liquid Retina display, and all-day battery life."
  },
  {
    id: 30,
    name: "Bose QuietComfort 45 Wireless Noise Cancelling Headphones",
    price: 329.99,
    originalPrice: 379.99,
    discount: 13,
    image: "https://m.media-amazon.com/images/I/51CvscYXpML._AC_UY218_.jpg",
    category: "Electronics",
    rating: 4.7,
    description: "Enjoy world-class noise cancellation, premium comfort, and up to 24 hours of battery life with these wireless headphones from Bose."
  },
  {
    id: 31,
    name: "Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens Kit",
    price: 449.99,
    originalPrice: 549.99,
    discount: 18,
    image: "https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_UY218_.jpg",
    category: "Electronics",
    rating: 4.6,
    description: "Perfect for beginners, this DSLR camera features a 24.1 Megapixel CMOS sensor, Full HD video recording, and built-in Wi-Fi connectivity."
  },
  {
    id: 32,
    name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker, 6 Quart",
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    image: "https://m.media-amazon.com/images/I/71WtwEvwGrL._AC_UL320_.jpg",
    category: "Home & Kitchen",
    rating: 4.7,
    description: "This versatile kitchen essential functions as a pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and warmer."
  },
  {
    id: 33,
    name: "Philips Air Fryer XXL with Digital Display",
    price: 149.99,
    originalPrice: 199.99,
    discount: 25,
    image: "https://m.media-amazon.com/images/I/718OIBJ3E8L._AC_UL320_.jpg",
    category: "Home & Kitchen",
    rating: 4.6,
    description: "Cook healthier meals with up to 90% less fat using this air fryer featuring rapid air technology and a large capacity for family-sized portions."
  },
  {
    id: 34,
    name: "KitchenAid Stand Mixer with 10 Speed Settings, 5 Quart",
    price: 349.99,
    originalPrice: 429.99,
    discount: 19,
    image: "https://m.media-amazon.com/images/I/61g+PrVQGVL._AC_UL320_.jpg",
    category: "Home & Kitchen",
    rating: 4.8,
    description: "This iconic stand mixer comes with a stainless steel bowl, dough hook, flat beater, and wire whip to handle all your baking needs."
  },
  {
    id: 35,
    name: "Dyson V11 Cordless Vacuum Cleaner",
    price: 599.99,
    originalPrice: 699.99,
    discount: 14,
    image: "https://m.media-amazon.com/images/I/615YmMr9fxL._AC_UL320_.jpg",
    category: "Home & Kitchen",
    rating: 4.7,
    description: "Experience powerful suction, intelligent cleaning modes, and up to 60 minutes of fade-free power with this advanced cordless vacuum."
  },
  {
    id: 36,
    name: "Levi's Men's 501 Original Fit Jeans",
    price: 39.99,
    originalPrice: 59.99,
    discount: 33,
    image: "https://m.media-amazon.com/images/I/61HfEZw+HpL._AC_UL320_.jpg",
    category: "Fashion",
    rating: 4.5,
    description: "The iconic straight fit jeans with a button fly, regular seat and thigh, made with premium denim for durability and classic style."
  },
  {
    id: 37,
    name: "Calvin Klein Men's Cotton Classics Multipack Crew Neck T-Shirts",
    price: 29.99,
    originalPrice: 39.99,
    discount: 25,
    image: "https://m.media-amazon.com/images/I/71qH5WH1K1L._AC_UL320_.jpg",
    category: "Fashion",
    rating: 4.6,
    description: "Pack of 3 classic crew neck t-shirts made with premium cotton for everyday comfort and lasting quality."
  },
  {
    id: 38,
    name: "Women's Cashmere Blend Cardigan Sweater",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    image: "https://m.media-amazon.com/images/I/718RaQ67XOL._AC_UL320_.jpg",
    category: "Fashion",
    rating: 4.4,
    description: "Luxurious cashmere blend cardigan featuring a relaxed fit, button-front closure, and ribbed cuffs for elegant everyday wear."
  },
  {
    id: 39,
    name: "Women's Lightweight Packable Down Jacket",
    price: 69.99,
    originalPrice: 89.99,
    discount: 22,
    image: "https://m.media-amazon.com/images/I/71B5YzEKZUL._AC_UL320_.jpg",
    category: "Fashion",
    rating: 4.5,
    description: "Water-resistant down jacket that packs into an included carrying bag, perfect for travel and transitional weather."
  },
  {
    id: 40,
    name: "MAC Matte Lipstick - Ruby Woo",
    price: 19.99,
    originalPrice: 24.99,
    discount: 20,
    image: "https://m.media-amazon.com/images/I/51YIpz0KjFL._SX679_.jpg",
    category: "Beauty",
    rating: 4.7,
    description: "MAC's iconic matte red lipstick with a vivid, intense color payoff that lasts up to 8 hours."
  },
  {
    id: 41,
    name: "Olay Regenerist Micro-Sculpting Cream Face Moisturizer",
    price: 28.99,
    originalPrice: 36.99,
    discount: 22,
    image: "https://m.media-amazon.com/images/I/71wTLBURhEL._SX679_.jpg",
    category: "Beauty",
    rating: 4.6,
    description: "Anti-aging face moisturizer that hydrates skin and diminishes the appearance of fine lines and wrinkles for a more youthful appearance."
  },
  {
    id: 42,
    name: "Neutrogena Hydro Boost Water Gel Face Moisturizer",
    price: 18.99,
    originalPrice: 24.99,
    discount: 24,
    image: "https://m.media-amazon.com/images/I/71QHNpQbPzL._SX679_.jpg",
    category: "Beauty",
    rating: 4.5,
    description: "Oil-free, water-based facial moisturizer that hydrates dry skin with hyaluronic acid, leaving it supple and smooth."
  },
  {
    id: 43,
    name: "The Subtle Art of Not Giving a F*ck by Mark Manson",
    price: 14.99,
    originalPrice: 18.99,
    discount: 21,
    image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UY218_.jpg",
    category: "Books",
    rating: 4.6,
    description: "A counterintuitive guide to living a good life by learning to accept and embrace difficulties and failures rather than always forcing positivity."
  },
  {
    id: 44,
    name: "Sapiens: A Brief History of Humankind by Yuval Noah Harari",
    price: 17.99,
    originalPrice: 24.99,
    discount: 28,
    image: "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UY218_.jpg",
    category: "Books",
    rating: 4.7,
    description: "An exploration of how Homo sapiens evolved from an unexceptional savannah-dwelling primate to become the dominant force on the planet."
  },
  {
    id: 45,
    name: "Think and Grow Rich by Napoleon Hill",
    price: 8.99,
    originalPrice: 12.99,
    discount: 31,
    image: "https://m.media-amazon.com/images/I/71UypkUjStL._AC_UY218_.jpg",
    category: "Books",
    rating: 4.7,
    description: "A personal development and self-improvement book that teaches the principles of success used by Andrew Carnegie and other wealthy individuals."
  },
  {
    id: 46,
    name: "Samsung Galaxy Tab S7 FE 12.4-inch Android Tablet",
    price: 429.99,
    originalPrice: 529.99,
    discount: 19,
    image: "https://m.media-amazon.com/images/I/61b2BrYtVGL._AC_UY218_.jpg",
    category: "Electronics",
    rating: 4.6,
    description: "Large 12.4-inch display tablet with included S Pen, perfect for note-taking, drawing, and entertainment with long-lasting battery life."
  },
  {
    id: 47,
    name: "Amazon Echo Show 10 (3rd Gen) Smart Display with Alexa",
    price: 249.99,
    originalPrice: 289.99,
    discount: 14,
    image: "https://m.media-amazon.com/images/I/61J6UT9oSPL._AC_UY218_.jpg",
    category: "Electronics",
    rating: 4.5,
    description: "The Echo Show 10 automatically rotates to follow you, keeping you in frame during video calls and showing you content as you move around."
  },
  {
    id: 48,
    name: "Ninja Foodi 9-in-1 Pressure Cooker and Air Fryer",
    price: 189.99,
    originalPrice: 229.99,
    discount: 17,
    image: "https://m.media-amazon.com/images/I/71+8uTMDRFL._AC_UL320_.jpg",
    category: "Home & Kitchen",
    rating: 4.8,
    description: "This versatile appliance combines pressure cooking and air frying with 8 other cooking functions to create quick, delicious meals in one pot."
  },
  {
    id: 49,
    name: "Men's Athletic Running Shoes",
    price: 69.99,
    originalPrice: 89.99,
    discount: 22,
    image: "https://m.media-amazon.com/images/I/81xykLCMsKL._AC_UL320_.jpg",
    category: "Fashion",
    rating: 4.4,
    description: "Lightweight, breathable running shoes with responsive cushioning and durable rubber outsole for traction on various surfaces."
  },
  {
    id: 50,
    name: "Le Labo Santal 33 Eau de Parfum",
    price: 89.99,
    originalPrice: 109.99,
    discount: 18,
    image: "https://m.media-amazon.com/images/I/61ijs3kBgSL._SX679_.jpg",
    category: "Beauty",
    rating: 4.8,
    description: "A unisex fragrance with notes of cardamom, iris, violet, and sandalwood that creates an addictive, distinctive scent signature."
  }
];

export default products;
