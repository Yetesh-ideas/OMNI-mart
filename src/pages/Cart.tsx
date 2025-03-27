
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, X, Plus, Minus, Heart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import products from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useUser } from "@/contexts/UserContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const { addToWishlist } = useWishlist();
  const { user } = useUser();
  
  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
  };
  
  const handleQuantityChange = (id: number, change: number) => {
    updateQuantity(id, change);
  };
  
  const moveToWishlist = (id: number) => {
    addToWishlist(id);
    removeFromCart(id);
  };
  
  const cartProducts = cartItems.map(item => {
    const product = products.find(p => p.id === item.id);
    return {
      ...product,
      quantity: item.quantity
    };
  }).filter(Boolean);
  
  const subtotal = cartProducts.reduce(
    (total, item) => total + (item?.price || 0) * (item?.quantity || 0),
    0
  );
  
  const shipping = 4.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;
  
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-lg mx-auto text-center py-16">
            <CardContent>
              <h2 className="text-2xl font-bold mb-4">Please sign in</h2>
              <p className="text-muted-foreground mb-8">You need to sign in to access your cart.</p>
              <Button asChild size="lg">
                <Link to="/auth">Sign In</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
  
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-lg mx-auto text-center py-16">
            <CardContent>
              <ShoppingCart className="mx-auto h-16 w-16 text-gray-300 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet.</p>
              <Button asChild size="lg">
                <Link to="/products">Start Shopping</Link>
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
          <h1 className="text-2xl font-bold ml-auto">Shopping Cart ({cartItems.length})</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-0">
                {cartProducts.map((item) => item && (
                  <div key={item.id} className="flex py-6 px-6 border-b">
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-base font-medium">
                            <Link to={`/product/${item.id}`} className="hover:text-primary">
                              {item.name}
                            </Link>
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">{item.category}</p>
                          {item.originalPrice && (
                            <div className="mt-1 flex items-center">
                              <span className="text-sm text-muted-foreground line-through mr-2">
                                ${item.originalPrice.toFixed(2)}
                              </span>
                              <span className="text-xs px-1.5 py-0.5 bg-red-100 text-red-800 rounded">
                                Save ${(item.originalPrice - item.price).toFixed(2)}
                              </span>
                            </div>
                          )}
                        </div>
                        <p className="text-base font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border rounded-md">
                          <button 
                            className="p-1.5 hover:bg-gray-100"
                            onClick={() => handleQuantityChange(item.id, -1)}
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-3">{item.quantity}</span>
                          <button 
                            className="p-1.5 hover:bg-gray-100"
                            onClick={() => handleQuantityChange(item.id, 1)}
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        
                        <div className="flex space-x-3">
                          <button 
                            onClick={() => moveToWishlist(item.id)} 
                            className="text-sm text-gray-500 hover:text-primary flex items-center"
                          >
                            <Heart size={16} className="mr-1" />
                            Move to Wishlist
                          </button>
                          <button 
                            onClick={() => handleRemoveItem(item.id)} 
                            className="text-sm text-gray-500 hover:text-red-500 flex items-center"
                          >
                            <X size={16} className="mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Proceed to Checkout
                  </Button>
                  
                  <div className="text-xs text-center text-muted-foreground mt-4">
                    By proceeding, you agree to the <Link to="/terms" className="underline">Terms and Conditions</Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-md font-medium mb-4">Have a promo code?</h3>
                  <div className="flex">
                    <input 
                      type="text" 
                      placeholder="Enter code" 
                      className="flex-1 h-10 rounded-l-md border border-input bg-background px-3 py-2 text-sm"
                    />
                    <Button className="rounded-l-none">Apply</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
