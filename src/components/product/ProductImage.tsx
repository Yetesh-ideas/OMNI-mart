
import { useState } from "react";
import { useEffect } from "react";

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
    <div className="bg-white rounded-lg p-6 flex items-center justify-center">
      {isLoading && !imageError && (
        <div className="animate-pulse flex items-center justify-center w-full h-[300px]">
          <div className="w-full h-full bg-gray-200 rounded-lg"></div>
        </div>
      )}
      <img 
        src={imageError ? placeholderImage : image} 
        alt={name}
        className={`max-h-[400px] object-contain transition-opacity duration-300 ${isLoading && !imageError ? 'opacity-0 absolute' : 'opacity-100'}`}
        onError={handleImageError}
        onLoad={handleImageLoad}
        loading="lazy"
      />
    </div>
  );
};

export default ProductImage;
