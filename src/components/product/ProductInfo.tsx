
import { useState } from "react";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Product } from "@/data/products/types";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useUser } from "@/contexts/UserContext";
import { formatPriceInINR } from "@/utils/currency";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { user } = useUser();

  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please sign in to add items to cart");
      return;
    }
    
    setIsAddingToCart(true);
    addToCart(product.id, quantity);
    
    // Show loading state briefly for better UX
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 600);
  };
  
  const handleWishlistToggle = () => {
    if (!user) {
      toast.error("Please sign in to add items to wishlist");
      return;
    }
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
      
      <div className="flex items-center mb-4">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className={`${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground ml-2">({Math.floor(Math.random() * 500) + 10} reviews)</span>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <span className="text-3xl font-bold">{formatPriceInINR(product.price)}</span>
          {product.originalPrice && (
            <>
              <span className="text-lg text-muted-foreground line-through ml-3">
                {formatPriceInINR(product.originalPrice)}
              </span>
              <span className="ml-2 px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </span>
            </>
          )}
        </div>
        <p className="text-sm text-green-600">In Stock</p>
      </div>
      
      <Separator className="my-6" />
      
      <div className="mb-6">
        <h3 className="font-medium mb-2">Quantity</h3>
        <div className="flex items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            disabled={quantity <= 1}
          >
            -
          </Button>
          <span className="mx-4 w-8 text-center">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </Button>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Button 
          className="flex-1" 
          size="lg"
          onClick={handleAddToCart}
          disabled={isAddingToCart}
        >
          {isAddingToCart ? (
            <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
          ) : (
            <ShoppingCart className="mr-2 h-5 w-5" />
          )}
          Add to Cart
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          onClick={handleWishlistToggle}
          className={isInWishlist(product.id) ? "border-red-500 text-red-500 hover:bg-red-50" : ""}
        >
          <Heart 
            className={`mr-2 h-5 w-5 ${isInWishlist(product.id) ? "fill-red-500 text-red-500" : ""}`} 
          />
          {isInWishlist(product.id) ? "In Wishlist" : "Add to Wishlist"}
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
