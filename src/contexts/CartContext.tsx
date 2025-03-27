
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "sonner";
import { useUser } from './UserContext';
import products from '@/data/products';

export interface CartItem {
  id: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (productId: number, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, change: number) => void;
  clearCart: () => void;
  getCartCount: () => number;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useUser();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage when user changes
  useEffect(() => {
    if (user) {
      const savedCart = localStorage.getItem(`omnistore_cart_${user.id}`);
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      } else {
        setCartItems([]);
      }
    } else {
      // When logged out, clear cart from memory
      setCartItems([]);
    }
  }, [user]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(`omnistore_cart_${user.id}`, JSON.stringify(cartItems));
    }
  }, [cartItems, user]);

  const addToCart = (productId: number, quantity = 1) => {
    if (!user) {
      toast.error("Please sign in to add items to cart");
      return;
    }

    const product = products.find(p => p.id === productId);
    if (!product) {
      toast.error("Product not found");
      return;
    }

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId);
      
      if (existingItem) {
        // Update quantity if item exists
        return prevItems.map(item => 
          item.id === productId 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        // Add new item
        return [...prevItems, { id: productId, quantity }];
      }
    });

    toast.success(`${product.name.substring(0, 30)}... added to cart!`);
  };

  const removeFromCart = (productId: number) => {
    if (!user) {
      toast.error("Please sign in to modify your cart");
      return;
    }
    
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    toast.success("Item removed from cart");
  };

  const updateQuantity = (productId: number, change: number) => {
    if (!user) {
      toast.error("Please sign in to modify your cart");
      return;
    }
    
    setCartItems(prevItems => 
      prevItems.map(item => {
        if (item.id === productId) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    if (!user) {
      toast.error("Please sign in to access your cart");
      return;
    }
    
    setCartItems([]);
    toast.success("Cart cleared");
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const product = products.find(p => p.id === item.id);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartCount,
      getCartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
