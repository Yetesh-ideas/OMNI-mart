
import { useState, useEffect } from "react";
import { Image, ImageOff } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductImageProps {
  image: string;
  name: string;
}

const ProductImage = ({ image, name }: ProductImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const placeholderImage = "https://placehold.co/400x400/e6e6e6/999999?text=Product+Image";

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // Check if image URL is valid before attempting to load it
  useEffect(() => {
    setIsLoading(true);
    setImageError(false);
    
    if (!image) {
      setImageError(true);
      setIsLoading(false);
    }
  }, [image]);

  return (
    <div className="bg-white rounded-lg p-6 flex items-center justify-center relative">
      {isLoading && !imageError && (
        <div className="w-full h-[300px] flex items-center justify-center">
          <Skeleton className="w-full h-full" />
        </div>
      )}
      
      {imageError && (
        <div className="w-full h-[300px] bg-gray-100 flex flex-col items-center justify-center rounded-lg">
          <ImageOff size={48} className="text-gray-400 mb-2" />
          <p className="text-gray-500 text-sm">Image not available</p>
        </div>
      )}
      
      <img 
        src={imageError ? placeholderImage : image} 
        alt={name}
        className={`max-h-[400px] object-contain transition-opacity duration-300 ${
          isLoading || imageError ? 'opacity-0 absolute' : 'opacity-100'
        }`}
        onError={handleImageError}
        onLoad={handleImageLoad}
        loading="lazy"
      />
    </div>
  );
};

export default ProductImage;
