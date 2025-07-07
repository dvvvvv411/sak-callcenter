
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, User, LogOut, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut, isAdmin } = useAuth();
  useScrollToTop();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/pricing", label: "Preise" },
    { path: "/contact", label: "Kontakt" }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <img 
              src="https://i.imgur.com/CIi9DJl.png" 
              alt="SAK Logo" 
              className="h-16 md:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
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
            
            {user ? (
              <div className="flex items-center space-x-4">
                {isAdmin && (
                  <Link to="/admin" className="text-foreground hover:text-primary transition-colors">
                    <Settings className="h-4 w-4" />
                  </Link>
                )}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span className="hidden lg:inline">Profil</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {isAdmin && (
                      <>
                        <DropdownMenuItem asChild>
                          <Link to="/admin">
                            <Settings className="h-4 w-4 mr-2" />
                            Admin Panel
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                      </>
                    )}
                    <DropdownMenuItem onClick={signOut}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Abmelden
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Link to="/auth">
                <Button size="sm" className="bg-gradient-primary text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  Jetzt starten
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Menu öffnen"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  onClick={closeMobileMenu}
                  className={`transition-colors py-3 px-4 text-center rounded-md ${
                    location.pathname === item.path 
                      ? "text-primary font-medium bg-primary/10" 
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {user ? (
                <div className="space-y-2">
                  {isAdmin && (
                    <Link to="/admin" onClick={closeMobileMenu}>
                      <Button variant="outline" className="w-full py-3 h-auto">
                        <Settings className="h-4 w-4 mr-2" />
                        Admin Panel
                      </Button>
                    </Link>
                  )}
                  <Button 
                    onClick={() => {
                      signOut();
                      closeMobileMenu();
                    }}
                    variant="destructive" 
                    className="w-full py-3 h-auto"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Abmelden
                  </Button>
                </div>
              ) : (
                <Link to="/auth" onClick={closeMobileMenu}>
                  <Button className="bg-gradient-primary text-white w-full py-3 h-auto">
                    <Phone className="h-4 w-4 mr-2" />
                    Jetzt starten
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
