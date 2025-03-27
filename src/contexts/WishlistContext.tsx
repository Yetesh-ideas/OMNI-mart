
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "sonner";
import { useUser } from './UserContext';
import products from '@/data/products';

interface WishlistContextType {
  wishlistItems: number[];
  addToWishlist: (productId: number) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useUser();
  const [wishlistItems, setWishlistItems] = useState<number[]>([]);

  // Load wishlist from localStorage when user changes
  useEffect(() => {
    if (user) {
      const savedWishlist = localStorage.getItem(`omnistore_wishlist_${user.id}`);
      if (savedWishlist) {
        setWishlistItems(JSON.parse(savedWishlist));
      } else {
        setWishlistItems([]);
      }
    } else {
      // When logged out, clear wishlist from memory
      setWishlistItems([]);
    }
  }, [user]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(`omnistore_wishlist_${user.id}`, JSON.stringify(wishlistItems));
    }
  }, [wishlistItems, user]);

  const addToWishlist = (productId: number) => {
    if (!user) {
      toast.error("Please sign in to add items to wishlist");
      return;
    }

    if (!wishlistItems.includes(productId)) {
      setWishlistItems(prev => [...prev, productId]);
      const product = products.find(p => p.id === productId);
      toast.success(`${product?.name.substring(0, 30)}... added to wishlist!`);
    }
  };

  const removeFromWishlist = (productId: number) => {
    if (!user) {
      toast.error("Please sign in to modify your wishlist");
      return;
    }
    
    setWishlistItems(prev => prev.filter(id => id !== productId));
    toast.success("Item removed from wishlist");
  };

  const isInWishlist = (productId: number) => {
    return wishlistItems.includes(productId);
  };

  const clearWishlist = () => {
    if (!user) {
      toast.error("Please sign in to access your wishlist");
      return;
    }
    
    setWishlistItems([]);
    toast.success("Wishlist cleared");
  };

  return (
    <WishlistContext.Provider value={{
      wishlistItems,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      clearWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
