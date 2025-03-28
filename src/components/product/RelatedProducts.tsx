
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Product } from "@/data/products/types";
import { formatPriceInINR } from "@/utils/currency";

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
          <Link to={`/product/${relatedProduct.id}`} key={relatedProduct.id} className="group">
            <div className="border rounded-lg overflow-hidden transition-all hover:shadow-md bg-white">
              <div className="aspect-square overflow-hidden bg-muted">
                <img 
                  src={relatedProduct.image} 
                  alt={relatedProduct.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium group-hover:text-primary transition-colors line-clamp-2">{relatedProduct.name}</h3>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${i < relatedProduct.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="font-bold mt-2">{formatPriceInINR(relatedProduct.price)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
