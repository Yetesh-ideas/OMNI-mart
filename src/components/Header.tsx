
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, User, Menu, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useUser } from "@/contexts/UserContext";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useUser();
  const { getCartCount } = useCart();

  const categories = [
    "Electronics", "Fashion", "Home & Kitchen", 
    "Beauty", "Books", "Toys & Games", "Sports", "Grocery"
  ];

  return (
    <header className="sticky top-0 z-10 bg-background shadow-sm">
      {/* Top navigation bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            OMNI<span className="font-light">store</span>
          </Link>
          
          <div className="hidden md:block flex-1 mx-10">
            <SearchBar />
          </div>
          
          <div className="flex items-center space-x-4 text-white">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm hidden sm:inline">Hi, {user.name.split(' ')[0]}</span>
                <button onClick={logout} className="flex items-center hover:text-primary-foreground/80">
                  <LogOut size={20} className="mr-1" />
                  <span className="text-sm hidden sm:inline">Logout</span>
                </button>
              </div>
            ) : (
              <Link to="/auth" className="flex items-center hover:text-primary-foreground/80">
                <User size={20} className="mr-1" />
                <span className="text-sm hidden sm:inline">Sign In</span>
              </Link>
            )}
            <Link to="/wishlist" className="flex items-center hover:text-primary-foreground/80">
              <Heart size={20} className="mr-1" />
              <span className="text-sm hidden sm:inline">Wishlist</span>
            </Link>
            <Link to="/cart" className="flex items-center hover:text-primary-foreground/80">
              <div className="relative">
                <ShoppingCart size={20} />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {getCartCount()}
                  </span>
                )}
              </div>
              <span className="text-sm ml-1 hidden sm:inline">Cart</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile search bar */}
      <div className="md:hidden bg-background border-b p-2">
        <SearchBar compact />
      </div>
      
      {/* Categories navigation */}
      <div className="bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center space-x-6 overflow-x-auto py-2">
            {categories.map((category, index) => (
              <Link 
                key={index}
                to={`/category/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} 
                className="text-sm whitespace-nowrap hover:text-primary"
              >
                {category}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu */}
          <div className="md:hidden py-2 flex justify-between items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={20} className="mr-1" />
              <span>Categories</span>
            </Button>
            <div className="flex space-x-4">
              <Link to="/deals" className="text-sm text-red-500 font-medium">
                Deals
              </Link>
              <Link to="/products" className="text-sm font-medium">
                New
              </Link>
            </div>
          </div>
          
          {/* Mobile category dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-2 grid grid-cols-2 gap-2 border-t">
              {categories.map((category, index) => (
                <Link 
                  key={index}
                  to={`/category/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} 
                  className="text-sm py-1 hover:text-primary"
                >
                  {category}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
