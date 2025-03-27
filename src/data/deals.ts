
export interface Deal {
  id: number;
  title: string;
  discount: string;
  image: string;
  backgroundColor: string;
  category: string;
}

const deals: Deal[] = [
  {
    id: 1,
    title: "Electronics Sale",
    discount: "Up to 40% Off",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070",
    backgroundColor: "#FCEFE8",
    category: "electronics"
  },
  {
    id: 2,
    title: "Fashion Deals",
    discount: "30-60% Off",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964",
    backgroundColor: "#F1F7FF",
    category: "fashion"
  },
  {
    id: 3,
    title: "Home Essentials",
    discount: "From $19.99",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974",
    backgroundColor: "#F2FCE2",
    category: "home-kitchen"
  },
  {
    id: 4,
    title: "Beauty Products",
    discount: "Buy 2 Get 1 Free",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080",
    backgroundColor: "#FDE1D3",
    category: "beauty"
  }
];

export default deals;
