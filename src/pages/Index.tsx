
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import products from "@/data/products";
import deals from "@/data/deals";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Carousel */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 space-y-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Special Offer
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  Up to 50% Off On Top Brands
                </h1>
                <p className="text-gray-600 text-lg max-w-md">
                  Discover amazing deals on electronics, fashion, home goods and more. Limited time offers!
                </p>
                <div className="pt-4">
                  <Button size="lg" asChild>
                    <Link to="/products">Shop Now</Link>
                  </Button>
                </div>
              </div>
              <div className="md:col-span-7">
                <img 
                  src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1170" 
                  alt="Shopping promotion" 
                  className="rounded-lg shadow-xl w-full object-cover h-[300px] md:h-[360px]"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Deal Categories */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {deals.map((deal) => (
                <Link 
                  key={deal.id} 
                  to={`/category/${deal.category}`} 
                  className="relative rounded-lg overflow-hidden group shadow-sm"
                  style={{ backgroundColor: deal.backgroundColor }}
                >
                  <div className="p-4 md:p-6">
                    <h3 className="font-bold text-gray-900 text-lg">{deal.title}</h3>
                    <p className="text-sm md:text-base font-medium text-red-600">{deal.discount}</p>
                    <span className="text-primary text-sm mt-2 inline-block group-hover:underline">
                      Shop now <ArrowRight size={14} className="inline ml-1" />
                    </span>
                  </div>
                  <img 
                    src={deal.image} 
                    alt={deal.title}
                    className="w-32 h-32 object-contain absolute bottom-0 right-0"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Trending Products */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Trending Products</h2>
              <Link to="/products" className="text-primary hover:underline flex items-center">
                View all <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.slice(0, 4).map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  rating={product.rating}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Categorized Products with Tabs */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
            
            <Tabs defaultValue="electronics" className="w-full">
              <TabsList className="w-full justify-start mb-6 overflow-x-auto">
                <TabsTrigger value="electronics">Electronics</TabsTrigger>
                <TabsTrigger value="fashion">Fashion</TabsTrigger>
                <TabsTrigger value="home">Home & Kitchen</TabsTrigger>
                <TabsTrigger value="all">All Categories</TabsTrigger>
              </TabsList>
              
              <TabsContent value="electronics" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products
                    .filter(product => product.category === "Electronics")
                    .map((product) => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        category={product.category}
                        rating={product.rating}
                      />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="fashion" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products
                    .filter(product => product.category === "Fashion")
                    .map((product) => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        category={product.category}
                        rating={product.rating}
                      />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="home" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products
                    .filter(product => product.category === "Home & Kitchen")
                    .map((product) => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        category={product.category}
                        rating={product.rating}
                      />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      category={product.category}
                      rating={product.rating}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Deals of the Day */}
        <section className="py-8 bg-orange-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">Deals of the Day</h2>
                <p className="text-muted-foreground">Offers end in 12:34:56</p>
              </div>
              <Link to="/deals" className="text-primary hover:underline flex items-center">
                View all <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products
                .filter(product => product.discount && product.discount > 20)
                .map((product) => (
                  <div key={product.id} className="relative">
                    <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.discount}% OFF
                    </div>
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      category={product.category}
                      rating={product.rating}
                    />
                  </div>
                ))}
            </div>
          </div>
        </section>
        
        {/* App Download Banner */}
        <section className="py-10 bg-gradient-to-r from-primary to-primary-foreground text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Download the OMNIstore App</h2>
                <p className="text-primary-foreground/90 mb-4">
                  Get exclusive app-only offers and shop on the go!
                </p>
                <div className="flex space-x-4">
                  <button className="bg-black text-white px-4 py-2 rounded-md flex items-center">
                    <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M17.2,12L12,16.2L6.8,12L12,7.8L17.2,12M12,3C16.4,3 20,6.6 20,11C20,15.4 16.4,19 12,19C7.6,19 4,15.4 4,11C4,6.6 7.6,3 12,3M12,1C6.5,1 2,5.5 2,11C2,16.5 6.5,21 12,21C17.5,21 22,16.5 22,11C22,5.5 17.5,1 12,1L12,1Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </button>
                  <button className="bg-black text-white px-4 py-2 rounded-md flex items-center">
                    <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1160" 
                  alt="Mobile App" 
                  className="w-64 mx-auto rounded-lg shadow-lg" 
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">OMNI<span className="font-light">store</span></h3>
              <p className="text-sm mb-4">
                Your one-stop destination for all your shopping needs. Quality products, competitive prices, and fast delivery.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/products" className="hover:text-white">All Products</Link></li>
                <li><Link to="/deals" className="hover:text-white">Deals</Link></li>
                <li><Link to="/category/electronics" className="hover:text-white">Electronics</Link></li>
                <li><Link to="/category/fashion" className="hover:text-white">Fashion</Link></li>
                <li><Link to="/category/home-kitchen" className="hover:text-white">Home & Kitchen</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link to="/returns" className="hover:text-white">Returns & Refunds</Link></li>
                <li><Link to="/shipping" className="hover:text-white">Shipping Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Newsletter</h4>
              <p className="text-sm mb-4">
                Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
              </p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 text-sm text-black rounded-l-md focus:outline-none"
                />
                <Button variant="default" className="rounded-l-none">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} OMNIstore. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-sm text-gray-400 hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
