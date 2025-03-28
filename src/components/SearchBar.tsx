
import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  className?: string;
  compact?: boolean;
}

const SearchBar = ({ className, compact = false }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };
  
  return (
    <form 
      onSubmit={handleSearch}
      className={cn(
        "flex items-center relative w-full",
        compact ? "max-w-[300px]" : "max-w-3xl",
        className
      )}
    >
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search products, brands and more..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full h-10 pl-4 pr-12 rounded-l-md border border-r-0 border-input bg-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
        />
        {!compact && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
            <span className="text-muted-foreground text-sm">in All Categories</span>
          </div>
        )}
      </div>
      <button
        type="submit"
        className="h-10 px-4 bg-primary hover:bg-primary/90 text-white rounded-r-md flex items-center justify-center"
        aria-label="Search"
      >
        <Search size={18} />
      </button>
    </form>
  );
};

export default SearchBar;
