
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

// Create filtered versions of each category
const filteredElectronicsProducts = filterProductsWithImages(electronicsProducts);
const filteredFashionProducts = filterProductsWithImages(fashionProducts);
const filteredHomeKitchenProducts = filterProductsWithImages(homeKitchenProducts);
const filteredBeautyProducts = filterProductsWithImages(beautyProducts);
const filteredBooksProducts = filterProductsWithImages(booksProducts);

// Filter and combine all products from different categories
const allProducts: Product[] = [
  ...filteredElectronicsProducts,
  ...filteredFashionProducts,
  ...filteredHomeKitchenProducts,
  ...filteredBeautyProducts,
  ...filteredBooksProducts
];

// Export filtered products
export default allProducts;
export { filterProductsWithImages };
export type { Product };
export { 
  filteredElectronicsProducts as electronicsProducts,
  filteredFashionProducts as fashionProducts,
  filteredHomeKitchenProducts as homeKitchenProducts,
  filteredBeautyProducts as beautyProducts,
  filteredBooksProducts as booksProducts
};
