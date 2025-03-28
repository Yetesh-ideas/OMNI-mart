
import { Product } from './types';
import electronicsProducts from './electronics';
import fashionProducts from './fashion';
import homeKitchenProducts from './home-kitchen';
import beautyProducts from './beauty';
import booksProducts from './books';

// Combine all products from different categories
const allProducts: Product[] = [
  ...electronicsProducts,
  ...fashionProducts,
  ...homeKitchenProducts,
  ...beautyProducts,
  ...booksProducts
];

export default allProducts;
export { Product };
export { electronicsProducts, fashionProducts, homeKitchenProducts, beautyProducts, booksProducts };
