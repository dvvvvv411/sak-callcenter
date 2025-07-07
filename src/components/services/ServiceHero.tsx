
import { Button } from "@/components/ui/button";
import { Phone, Users, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceHero = () => {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-neon-green/5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Professionelle Services
              </span>
              <br />
              <span className="text-primary">für jede Branche</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Von E-Commerce bis B2B - unsere mehrsprachigen Call Center Lösungen 
              unterstützen Ihr Business mit maßgeschneiderten Services und bewährter Expertise.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white border-0">
                <Phone className="h-5 w-5 mr-3" />
                Kostenlose Beratung
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/30 text-primary hover:bg-primary/5">
              Services entdecken
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Zufriedene Kunden</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-muted-foreground">Sprachen</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Verfügbarkeit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
