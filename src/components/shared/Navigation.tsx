
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/pricing", label: "Pricing" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            CallCenter Pro
          </Link>
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`transition-colors ${
                  location.pathname === item.path 
                    ? "text-primary font-medium" 
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button size="sm" className="bg-gradient-primary text-white">
                <Phone className="h-4 w-4 mr-2" />
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
