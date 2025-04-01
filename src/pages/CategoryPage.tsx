
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import allProducts, { 
  electronicsProducts, 
  fashionProducts, 
  homeKitchenProducts, 
  beautyProducts, 
  booksProducts 
} from "@/data/products";
import { Product } from "@/data/products/types";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  // Format category name for display (convert from URL format to readable format)
  const formatCategoryName = (categorySlug: string): string => {
    return categorySlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .replace(/And/g, '&');
  };

  // Convert display format back to URL slug
  const categoryToSlug = (categoryName: string): string => {
    return categoryName
      .toLowerCase()
      .replace(/ & /g, '-')
      .replace(/ /g, '-');
  };

  const displayCategory = category ? formatCategoryName(category) : "";

  // Get products by category name (display format)
  const getProductsByCategory = (categoryName: string): Product[] => {
    switch(categoryName) {
      case "Electronics":
        return electronicsProducts;
      case "Fashion":
        return fashionProducts;
      case "Home & Kitchen":
        return homeKitchenProducts;
      case "Beauty":
        return beautyProducts;
      case "Books":
        return booksProducts;
      // These categories don't have product data yet, but we handle them anyway
      case "Toys & Games":
      case "Sports":
      case "Grocery":
        return [];
      default:
        return allProducts;
    }
  };
  
  useEffect(() => {
    setLoading(true);
    
    if (!category) {
      setFilteredProducts(allProducts);
      setLoading(false);
      return;
    }
    
    // Convert category to normalized format for comparison
    const normalizedCategoryName = formatCategoryName(category);
    
    // Get products for this category
    const categoryProducts = getProductsByCategory(normalizedCategoryName);
    setFilteredProducts(categoryProducts);
    setLoading(false);
  }, [category]);

  // All available categories for the sidebar
  const categories = [
    "Electronics", "Fashion", "Home & Kitchen", 
    "Beauty", "Books", "Toys & Games", "Sports", "Grocery"
  ];

  const handleCategoryChange = (newCategory: string) => {
    navigate(`/category/${categoryToSlug(newCategory)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Category Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h2 className="font-medium text-lg mb-4">Categories</h2>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryChange(cat)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        displayCategory === cat
                          ? "bg-primary/10 text-primary font-medium"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Products Area */}
          <div className="md:col-span-3">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">{displayCategory || "All Products"}</h1>
              <p className="text-muted-foreground">
                {filteredProducts.length} products found
              </p>
            </div>
            
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="border rounded-lg overflow-hidden">
                    <Skeleton className="h-[200px] w-full" />
                    <div className="p-4">
                      <Skeleton className="h-4 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    category={product.category}
                    rating={product.rating}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <p className="text-xl font-medium mb-4">No products found in this category</p>
                <p className="text-muted-foreground">
                  We're working on adding products to this category. Please check back later!
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;
