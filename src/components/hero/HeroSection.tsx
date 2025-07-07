
import { Button } from "@/components/ui/button";
import { Phone, Mail, ChevronRight } from "lucide-react";
import LiveCounter from "./LiveCounter";
import LanguageSelector from "./LanguageSelector";
import ChatPreview from "./ChatPreview";
import HeroStats from "./HeroStats";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-32 px-6 relative overflow-hidden min-h-screen">
      {/* Enhanced Background with Multiple Animated Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/8 via-transparent to-neon-green/8"></div>
      
      {/* Large Floating Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      {/* Additional Medium Floating Elements */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-electric-blue/8 to-neon-green/8 rounded-full blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-neon-green/6 to-electric-blue/6 rounded-full blur-3xl animate-float" style={{animationDelay: '4.5s'}}></div>
      
      {/* Small Decorative Elements */}
      <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-electric-blue/5 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-neon-green/5 rounded-full blur-2xl animate-float" style={{animationDelay: '5s'}}></div>
      
      {/* Geometric Accent Elements */}
      <div className="absolute top-1/2 left-10 w-4 h-4 bg-electric-blue/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-3 h-3 bg-neon-green/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-gradient-primary rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      
      {/* Subtle Lines */}
      <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent"></div>
      <div className="absolute bottom-1/4 right-0 w-40 h-px bg-gradient-to-l from-transparent via-neon-green/20 to-transparent"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Ihr Business
                </span>
                <br />
                <span className="text-primary">spricht jede Sprache</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl">
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

          {/* Right Column - Interactive Dashboard */}
          <div className="space-y-6 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4">
              <LiveCounter />
              <LanguageSelector />
            </div>
            
            <ChatPreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
