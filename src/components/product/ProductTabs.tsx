
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Product } from "@/data/products/types";

interface ProductTabsProps {
  product: Product;
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  return (
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
  );
};

export default ProductTabs;
