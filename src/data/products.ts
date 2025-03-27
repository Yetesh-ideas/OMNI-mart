
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
  }
];

export default products;
