
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, Heart, ArrowLeft, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import Header from "@/components/Header";
import products from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useUser } from "@/contexts/UserContext";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(products.find(p => p.id === Number(id)));
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { user } = useUser();
  
  // Find related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);
    
  useEffect(() => {
    // Update product when id changes
    setProduct(products.find(p => p.id === Number(id)));
    // Reset quantity when product changes
    setQuantity(1);
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm mb-6">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <ChevronRight size={14} className="mx-2 text-muted-foreground" />
          <Link to={`/category/${product.category.toLowerCase()}`} className="text-muted-foreground hover:text-primary">
            {product.category}
          </Link>
          <ChevronRight size={14} className="mx-2 text-muted-foreground" />
          <span className="text-foreground truncate max-w-[200px]">{product.name}</span>
        </nav>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg p-6 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name}
              className="max-h-[400px] object-contain"
            />
          </div>
          
          {/* Product Info */}
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
                <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through ml-3">
                      ${product.originalPrice.toFixed(2)}
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
        </div>
        
        {/* Product Details Tabs */}
        <Card className="mb-12">
          <Tabs defaultValue="description">
            <TabsList className="w-full border-b rounded-none justify-start">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="p-6">
              <p>{product.description}</p>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus 
                rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
              </p>
            </TabsContent>
            <TabsContent value="specifications" className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Brand</span>
                    <span className="font-medium">{product.category}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Model</span>
                    <span className="font-medium">2023</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Color</span>
                    <span className="font-medium">Multiple</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Category</span>
                    <span className="font-medium">{product.category}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Warranty</span>
                    <span className="font-medium">1 Year</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Return Policy</span>
                    <span className="font-medium">30 Days</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Customer Reviews</h3>
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
                  <span className="text-sm ml-2">Based on {Math.floor(Math.random() * 500) + 10} reviews</span>
                </div>
              </div>
              
              <div className="space-y-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="border-b pb-4 last:border-0">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star
                            key={j}
                            size={16}
                            className={`${j < Math.floor(Math.random() * 3) + 3 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium ml-2">User{i + 1}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">Purchased on {new Date().toLocaleDateString()}</p>
                    <p>Great product! Exactly as described. Would recommend to others.</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Card>
        
        {/* Related Products */}
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
                    <p className="font-bold mt-2">${relatedProduct.price.toFixed(2)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
