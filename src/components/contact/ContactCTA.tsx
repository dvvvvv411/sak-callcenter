
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-electric-blue/5 via-transparent to-neon-green/5 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Lassen Sie uns sprechen
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Egal ob Sie Fragen haben, ein Angebot benötigen oder einfach mehr über unsere Services erfahren möchten - 
            wir sind für Sie da und beraten Sie gerne kostenlos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white border-0">
              <Phone className="h-5 w-5 mr-3" />
              0241 53307091
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/30 text-primary hover:bg-primary/5">
              Live Demo buchen
              <ArrowRight className="h-5 w-5 ml-3" />
            </Button>
          </div>
          
          <div className="pt-8 border-t border-border/20 text-sm text-muted-foreground">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-neon-green" />
                <span>DSGVO-konform</span>
              </div>
              <div className="flex items-center space-x-2">
                <ArrowRight className="h-4 w-4 text-neon-green" />
                <span>Kostenlose Beratung</span>
              </div>
              <div className="flex items-center space-x-2">
                <ArrowRight className="h-4 w-4 text-neon-green" />
                <span>Antwort in 2 Stunden</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
