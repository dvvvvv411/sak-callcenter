
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCategories from "@/components/services/ServiceCategories";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceCTA from "@/components/services/ServiceCTA";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              CallCenter Pro
            </Link>
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/services" className="text-primary font-medium">Services</Link>
              <Link to="/pricing" className="text-foreground hover:text-primary transition-colors">Pricing</Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
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

      <ServiceHero />
      <ServiceCategories />
      <ServiceFeatures />
      <ServiceCTA />
    </div>
  );
};

export default Services;
