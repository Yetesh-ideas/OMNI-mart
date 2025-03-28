
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
  category: string;
  productName: string;
}

const Breadcrumbs = ({ category, productName }: BreadcrumbsProps) => {
  return (
    <nav className="flex items-center text-sm mb-6">
      <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
      <ChevronRight size={14} className="mx-2 text-muted-foreground" />
      <Link to={`/category/${category.toLowerCase()}`} className="text-muted-foreground hover:text-primary">
        {category}
      </Link>
      <ChevronRight size={14} className="mx-2 text-muted-foreground" />
      <span className="text-foreground truncate max-w-[200px]">{productName}</span>
    </nav>
  );
};

export default Breadcrumbs;
