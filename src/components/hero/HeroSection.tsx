
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, ChevronRight } from "lucide-react";
import LiveCounter from "./LiveCounter";
import LanguageSelector from "./LanguageSelector";
import ChatPreview from "./ChatPreview";
import HeroStats from "./HeroStats";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-neon-green/5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <Badge className="bg-gradient-glass border border-white/20 text-primary backdrop-blur-sm" variant="outline">
              🏢 Bewährte Expertise seit 7 Jahren
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Ihr Business
                </span>
                <br />
                <span className="text-primary">spricht jede Sprache</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Professionelle mehrsprachige Kundenbetreuung mit modernster Technologie. 
                Seit 7 Jahren vertrauen Unternehmen auf unsere bewährten Call Center Lösungen.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white border-0 animate-glow">
                <Phone className="h-5 w-5 mr-3" />
                Sofort loslegen - Kostenlos
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/30 text-primary hover:bg-primary/5 backdrop-blur-sm">
                Live Demo ansehen
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

            <HeroStats />
          </div>

          {/* Right Column - Interactive Elements */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <LiveCounter />
              <LanguageSelector />
            </div>
            
            <ChatPreview />
            
            <div className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  92%
                </div>
                <p className="text-sm text-muted-foreground">
                  Kundenzufriedenheit nach 6 Monaten
                </p>
                <Button variant="outline" size="sm" className="text-sm border-primary/30 text-primary hover:bg-primary/5">
                  <Mail className="h-4 w-4 mr-2" />
                  Beratungstermin buchen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
