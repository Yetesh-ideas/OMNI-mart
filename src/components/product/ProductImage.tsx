
import { useState } from "react";

interface ProductImageProps {
  image: string;
  name: string;
}

const ProductImage = ({ image, name }: ProductImageProps) => {
  const [imageError, setImageError] = useState(false);
  const placeholderImage = "https://placehold.co/400x400/e6e6e6/999999?text=Product+Image";

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-white rounded-lg p-6 flex items-center justify-center">
      <img 
        src={imageError ? placeholderImage : image} 
        alt={name}
        className="max-h-[400px] object-contain"
        onError={handleImageError}
      />
    </div>
  );
};

export default ProductImage;
