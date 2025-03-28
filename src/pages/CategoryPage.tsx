
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";

const CategoryPage = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // Format category name for display (convert from URL format to readable format)
  const formatCategoryName = (categorySlug: string): string => {
    return categorySlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .replace(/And/g, '&');
  };

  const displayCategory = category ? formatCategoryName(category) : "";
  
  useEffect(() => {
    if (!category) {
      setFilteredProducts(products);
      return;
    }
    
    // Convert category to normalized format for comparison
    const normalizedCategoryName = formatCategoryName(category);
    
    // Filter products based on category
    const filtered = products.filter(
      (product) => product.category === normalizedCategoryName
    );
    
    setFilteredProducts(filtered);
  }, [category]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">{displayCategory}</h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} products found
          </p>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
          <div className="text-center py-12">
            <p className="text-xl font-medium mb-4">No products found in this category</p>
            <p className="text-muted-foreground">
              Try browsing a different category or using search
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default CategoryPage;
