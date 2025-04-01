
import { Link } from "react-router-dom";
import { Star, ImageOff } from "lucide-react";
import { Product } from "@/data/products/types";
import { formatPriceInINR } from "@/utils/currency";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface RelatedProductsProps {
  relatedProducts: Product[];
}

const RelatedProducts = ({ relatedProducts }: RelatedProductsProps) => {
  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.map((relatedProduct) => (
          <RelatedProductCard key={relatedProduct.id} product={relatedProduct} />
        ))}
      </div>
    </div>
  );
};

// Separate component for related product cards to handle image loading
const RelatedProductCard = ({ product }: { product: Product }) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const placeholderImage = "https://placehold.co/400x400/e6e6e6/999999?text=Product+Image";

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="border rounded-lg overflow-hidden transition-all hover:shadow-md bg-white">
        <div className="aspect-square overflow-hidden bg-muted relative">
          {isLoading && !imageError && (
            <Skeleton className="absolute inset-0" />
          )}
          
          {imageError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
              <ImageOff size={24} className="text-gray-400 mb-1" />
              <span className="text-xs text-gray-500">No image</span>
            </div>
          )}
          
          <img 
            src={imageError ? placeholderImage : product.image} 
            alt={product.name}
            className={`w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300 ${
              isLoading || imageError ? 'opacity-0 absolute' : 'opacity-100'
            }`}
            onError={handleImageError}
            onLoad={handleImageLoad}
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium group-hover:text-primary transition-colors line-clamp-2">{product.name}</h3>
          <div className="flex items-center mt-1">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
          </div>
          <p className="font-bold mt-2">{formatPriceInINR(product.price)}</p>
        </div>
      </div>
    </Link>
  );
};

export default RelatedProducts;
