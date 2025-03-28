
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import products from "@/data/products";
import ProductImage from "@/components/product/ProductImage";
import ProductInfo from "@/components/product/ProductInfo";
import ProductTabs from "@/components/product/ProductTabs";
import RelatedProducts from "@/components/product/RelatedProducts";
import Breadcrumbs from "@/components/product/Breadcrumbs";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(products.find(p => p.id === Number(id)));
  
  // Find related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);
    
  useEffect(() => {
    // Update product when id changes
    setProduct(products.find(p => p.id === Number(id)));
    // Scroll to top when navigating to a new product
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">Sorry, the product you are looking for does not exist.</p>
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <Breadcrumbs category={product.category} productName={product.name} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <ProductImage image={product.image} name={product.name} />
          
          {/* Product Info */}
          <ProductInfo product={product} />
        </div>
        
        {/* Product Details Tabs */}
        <ProductTabs product={product} />
        
        {/* Related Products */}
        <RelatedProducts relatedProducts={relatedProducts} />
      </div>
    </div>
  );
};

export default ProductDetail;
