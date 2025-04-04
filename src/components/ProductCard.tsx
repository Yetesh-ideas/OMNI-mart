import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, ImageOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { formatPriceInINR } from "@/utils/currency";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

const ProductCard = ({ id, name, price, image, category, rating }: ProductCardProps) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAddingToCart(true);
    
    // Add to cart using context
    addToCart(id);
    toast.success(`${name} added to cart`);
    
    // Show loading state briefly for better UX
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 600);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInWishlist(id)) {
      removeFromWishlist(id);
      toast.info(`${name} removed from wishlist`);
    } else {
      addToWishlist(id);
      toast.success(`${name} added to wishlist`);
    }
  };

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
    console.log(`Product card image failed to load: ${image} for product ID: ${id}`);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    setImageError(false);
    
    if (!image || image.trim() === '') {
      setImageError(true);
      setIsLoading(false);
      console.log(`No image URL provided for product ID: ${id}`);
    }
  }, [image, id]);

  const placeholderImage = "https://placehold.co/400x400/e6e6e6/999999?text=Product+Image";

  return (
    <Link to={`/product/${id}`} className="group">
      <div className="border rounded-lg overflow-hidden transition-all hover:shadow-md bg-white">
        <div className="relative aspect-square overflow-hidden bg-muted">
          {isLoading && !imageError && (
            <Skeleton className="absolute inset-0" />
          )}
          
          {imageError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
              <ImageOff size={32} className="text-gray-400 mb-1" />
              <span className="text-xs text-gray-500">No image</span>
            </div>
          )}
          
          <img 
            src={imageError ? placeholderImage : image} 
            alt={name}
            className={`w-full h-full object-contain p-4 group-hover:scale-105 transition-all duration-300 ${
              isLoading || imageError ? 'opacity-0 absolute' : 'opacity-100'
            }`}
            onError={handleImageError}
            onLoad={handleImageLoad}
            loading="lazy"
          />
          <button 
            onClick={handleWishlistToggle}
            className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white shadow-sm z-10"
            aria-label={isInWishlist(id) ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart 
              size={18} 
              className={`${isInWishlist(id) ? 'text-red-500 fill-red-500' : 'text-muted-foreground hover:text-red-500'}`}
            />
          </button>
        </div>
        <div className="p-4">
          <h3 className="font-medium group-hover:text-primary transition-colors line-clamp-2">{name}</h3>
          <div className="flex items-center mt-1">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-1">({Math.floor(Math.random() * 500) + 10})</span>
          </div>
          <p className="text-muted-foreground text-sm mt-1">{category}</p>
          <div className="flex justify-between items-center mt-3">
            <span className="font-bold text-lg">{formatPriceInINR(price)}</span>
            <Button 
              size="sm" 
              onClick={handleAddToCart} 
              disabled={isAddingToCart}
              className="bg-primary hover:bg-primary/90"
              aria-label="Add to cart"
            >
              {isAddingToCart ? (
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-1"></span>
              ) : (
                <ShoppingCart size={16} className="mr-1" />
              )}
              Add
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
