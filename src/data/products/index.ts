
import { Product } from './types';
import electronicsProducts from './electronics';
import fashionProducts from './fashion';
import homeKitchenProducts from './home-kitchen';
import beautyProducts from './beauty';
import booksProducts from './books';

// Filter out products with missing images
const filterProductsWithImages = (products: Product[]) => {
  return products.filter(product => {
    // Check if image URL exists and is not empty
    return product.image && product.image.trim() !== '';
  });
};

// Filter and combine all products from different categories
const allProducts: Product[] = [
  ...filterProductsWithImages(electronicsProducts),
  ...filterProductsWithImages(fashionProducts),
  ...filterProductsWithImages(homeKitchenProducts),
  ...filterProductsWithImages(beautyProducts),
  ...filterProductsWithImages(booksProducts)
];

// Apply filter to category exports as well
export default allProducts;
export { filterProductsWithImages };
export type { Product };
export { 
  filterProductsWithImages(electronicsProducts) as electronicsProducts, 
  filterProductsWithImages(fashionProducts) as fashionProducts, 
  filterProductsWithImages(homeKitchenProducts) as homeKitchenProducts, 
  filterProductsWithImages(beautyProducts) as beautyProducts, 
  filterProductsWithImages(booksProducts) as booksProducts 
};
