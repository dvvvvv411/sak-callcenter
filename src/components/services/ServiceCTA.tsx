
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-electric-blue/5 via-transparent to-neon-green/5 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Bereit für den nächsten Schritt?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam die perfekte Call Center Lösung für Ihr Unternehmen entwickeln. 
            Kostenlose Beratung und individuelle Angebote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white border-0">
                <Phone className="h-5 w-5 mr-3" />
                Kostenlose Beratung
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/30 text-primary hover:bg-primary/5">
                <Mail className="h-5 w-5 mr-3" />
                Angebot anfordern
              </Button>
            </Link>
          </div>
          
          <div className="pt-8 border-t border-border/20 text-sm text-muted-foreground">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center space-x-2">
                <ArrowRight className="h-4 w-4 text-neon-green" />
                <span>Setup in 48 Stunden</span>
              </div>
              <div className="flex items-center space-x-2">
                <ArrowRight className="h-4 w-4 text-neon-green" />
                <span>Keine Vertragsbindung</span>
              </div>
              <div className="flex items-center space-x-2">
                <ArrowRight className="h-4 w-4 text-neon-green" />
                <span>DSGVO-konform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
