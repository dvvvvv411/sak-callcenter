
import { Badge } from "@/components/ui/badge";
import { TrendingDown, Euro, Clock } from "lucide-react";

const PricingHero = () => {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-neon-green/5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-8">
          <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30 px-4 py-2">
            <TrendingDown className="h-4 w-4 mr-2" />
            Bis zu 60% günstiger als Konkurrenz
          </Badge>
          
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Transparente Preise
              </span>
              <br />
              <span className="text-primary">ohne versteckte Kosten</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Wählen Sie das perfekte Paket für Ihr Unternehmen. Alle Preise sind transparent, 
              fair kalkuliert und ohne langfristige Vertragsbindung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <Euro className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">Ab 2,50€</div>
              <div className="text-muted-foreground">Pro Gespräch</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">0€</div>
              <div className="text-muted-foreground">Setup-Kosten</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <TrendingDown className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">60%</div>
              <div className="text-muted-foreground">Kostenersparnis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
