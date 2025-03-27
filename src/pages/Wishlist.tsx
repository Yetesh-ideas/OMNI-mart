
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import products from "@/data/products";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { useUser } from "@/contexts/UserContext";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { user } = useUser();
  
  const wishlistProducts = wishlistItems.map(id => 
    products.find(product => product.id === id)
  ).filter(Boolean);
  
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-lg mx-auto text-center py-16">
            <CardContent>
              <h2 className="text-2xl font-bold mb-4">Please sign in</h2>
              <p className="text-muted-foreground mb-8">You need to sign in to access your wishlist.</p>
              <Button asChild size="lg">
                <Link to="/auth">Sign In</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
  
  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-lg mx-auto text-center py-16">
            <CardContent>
              <ShoppingCart className="mx-auto h-16 w-16 text-gray-300 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your wishlist yet.</p>
              <Button asChild size="lg">
                <Link to="/products">Discover Products</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link to="/" className="text-primary flex items-center">
            <ArrowLeft size={18} className="mr-1" />
            Continue Shopping
          </Link>
          <h1 className="text-2xl font-bold ml-auto">My Wishlist ({wishlistItems.length})</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistProducts.map((product) => product && (
            <Card key={product.id}>
              <CardContent className="p-4">
                <div className="relative">
                  <button 
                    onClick={() => removeFromWishlist(product.id)} 
                    className="absolute top-0 right-0 p-1 bg-white rounded-full shadow-sm z-10"
                  >
                    <X size={18} className="text-gray-500 hover:text-red-500" />
                  </button>
                  <div className="aspect-square overflow-hidden bg-gray-100 mb-4 rounded">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>
                
                <h3 className="font-medium line-clamp-2 h-12">
                  <Link to={`/product/${product.id}`} className="hover:text-primary">
                    {product.name}
                  </Link>
                </h3>
                
                <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
                
                <Button 
                  onClick={() => {
                    addToCart(product.id);
                    removeFromWishlist(product.id);
                  }}
                  className="w-full mt-4"
                >
                  <ShoppingCart size={16} className="mr-2" />
                  Move to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
