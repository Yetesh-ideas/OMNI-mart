
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart, Search, Star, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      category: "Electronics",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      name: "Ergonomic Office Chair",
      price: 249.99,
      category: "Home Office",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      price: 149.99,
      category: "Wearables",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      name: "Premium Leather Backpack",
      price: 129.99,
      category: "Accessories",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const categories = [
    { name: "Electronics", image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
    { name: "Clothing", image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
    { name: "Home & Garden", image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
    { name: "Accessories", image: "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="border-b sticky top-0 z-10 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            OMNI<span className="text-primary">store</span>
          </Link>
          
          <div className="hidden md:flex space-x-6 text-sm">
            <Link to="/products" className="hover:text-primary transition-colors">All Products</Link>
            <Link to="/category/clothing" className="hover:text-primary transition-colors">Clothing</Link>
            <Link to="/category/electronics" className="hover:text-primary transition-colors">Electronics</Link>
            <Link to="/category/home" className="hover:text-primary transition-colors">Home</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button aria-label="Search" className="p-2 hover:text-primary transition-colors">
              <Search size={20} />
            </button>
            <Link to="/wishlist" aria-label="Wishlist" className="p-2 hover:text-primary transition-colors">
              <Heart size={20} />
            </Link>
            <Link to="/cart" aria-label="Cart" className="p-2 hover:text-primary transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full text-xs w-4 h-4 flex items-center justify-center">
                3
              </span>
            </Link>
            <Link to="/auth">
              <Button variant="outline" size="sm">Sign In</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">New Summer Collection</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover Premium Products at <span className="text-primary">OMNI<span className="font-light">store</span></span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Shop the latest trends with unbeatable prices and quality that speaks for itself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="gap-2">
                <Link to="/products">Shop Now <ArrowRight size={18} /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/category/featured">Explore Featured</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/20 z-10 rounded-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" 
              alt="OMNIstore featured products" 
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-6 left-6 z-20 bg-background/80 backdrop-blur-sm rounded-lg p-4 max-w-xs">
              <p className="font-semibold">Summer Sale</p>
              <p className="text-sm text-muted-foreground">Up to 40% off on select items</p>
              <Link to="/sale" className="text-primary text-sm flex items-center mt-2 hover:underline">
                Shop the sale <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 rounded-full p-3 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
              </div>
              <h3 className="font-medium">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On orders over $50</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 rounded-full p-3 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
              </div>
              <h3 className="font-medium">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Customer service</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 rounded-full p-3 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
              </div>
              <h3 className="font-medium">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">100% secure checkout</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 rounded-full p-3 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
              </div>
              <h3 className="font-medium">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">30 day return policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Shop by Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link to={`/category/${category.name.toLowerCase()}`} key={index} className="group">
              <div className="relative rounded-lg overflow-hidden h-48 md:h-64">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10"></div>
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                  <div className="bg-background/80 backdrop-blur-sm rounded-lg px-4 py-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h3 className="font-semibold text-lg text-center">{category.name}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Featured Products</h2>
          <Link to="/products" className="text-primary hover:underline flex items-center">
            View All <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden group">
              <div className="relative h-60 overflow-hidden bg-muted">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 z-10 flex flex-col gap-2">
                  <button className="bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors">
                    <Heart size={16} className="text-muted-foreground hover:text-primary transition-colors" />
                  </button>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
                <h3 className="font-medium group-hover:text-primary transition-colors">{product.name}</h3>
                <div className="flex items-center mt-1 mb-2">
                  <div className="flex">
                    {Array(5).fill(0).map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted"}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground ml-1">{product.rating}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-semibold">${product.price.toFixed(2)}</span>
                  <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ShoppingCart size={16} className="mr-1" /> Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-12 container mx-auto px-4">
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" 
            alt="Special offer" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex items-center z-20 px-6 md:px-12">
            <div className="max-w-lg text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Summer Special Offer</h3>
              <p className="mb-4">Get up to 40% off on selected items. Limited time offer.</p>
              <Button className="bg-white text-primary hover:bg-white/90">Shop Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">New Arrivals</h2>
          <Link to="/new" className="text-primary hover:underline flex items-center">
            View All <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { 
              id: 5, 
              name: "Modern Desk Lamp", 
              price: 79.99, 
              image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            },
            { 
              id: 6, 
              name: "Minimalist Watch", 
              price: 119.99, 
              image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            },
            { 
              id: 7, 
              name: "Wireless Earbuds", 
              price: 89.99, 
              image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            },
            { 
              id: 8, 
              name: "Glass Water Bottle", 
              price: 29.99, 
              image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            }
          ].map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-square overflow-hidden bg-muted rounded-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="font-medium text-sm group-hover:text-primary transition-colors truncate">{product.name}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <span className="font-semibold text-sm">${product.price.toFixed(2)}</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">New</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Subscribe to the OMNIstore newsletter for exclusive offers and updates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email" 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">OMNI<span className="text-primary">store</span></h3>
              <p className="text-muted-foreground text-sm">
                Premium products for your lifestyle. Quality meets innovation at OMNIstore.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/products" className="hover:text-primary transition-colors">All Products</Link></li>
                <li><Link to="/category/new" className="hover:text-primary transition-colors">New Arrivals</Link></li>
                <li><Link to="/category/featured" className="hover:text-primary transition-colors">Featured</Link></li>
                <li><Link to="/category/sale" className="hover:text-primary transition-colors">Sale</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                <li><Link to="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
                <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Account</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/auth" className="hover:text-primary transition-colors">Sign In / Register</Link></li>
                <li><Link to="/account" className="hover:text-primary transition-colors">My Account</Link></li>
                <li><Link to="/orders" className="hover:text-primary transition-colors">Order History</Link></li>
                <li><Link to="/wishlist" className="hover:text-primary transition-colors">Wishlist</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2023 OMNIstore. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/visa.svg" alt="Visa" className="h-6 w-10 opacity-70" />
              <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mastercard.svg" alt="Mastercard" className="h-6 w-10 opacity-70" />
              <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/paypal.svg" alt="PayPal" className="h-6 w-10 opacity-70" />
              <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/applepay.svg" alt="Apple Pay" className="h-6 w-10 opacity-70" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
