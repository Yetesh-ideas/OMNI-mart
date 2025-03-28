
import { Product } from './types';

const electronicsProducts: Product[] = [
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
  }
];

export default electronicsProducts;
