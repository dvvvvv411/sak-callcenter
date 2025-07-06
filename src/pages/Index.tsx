import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Clock, Users, Headphones, Check, Star, ArrowUp, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center animate-glow">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              MultiCall Pro
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Services
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Technologie
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Preise
            </Button>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Beratung buchen
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-background/40"></div>
        {/* Additional design elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <Badge className="mb-8 bg-gradient-glass border border-white/20 text-primary backdrop-blur-sm" variant="outline">
            🚀 KI-basierte Kundenbetreuung 2025
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Ihr Business
            </span>
            <br />
            <span className="text-primary">spricht jede Sprache</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Revolutionäre AI-gestützte Kundenbetreuung in 25+ Sprachen. 
            Steigern Sie Ihren Umsatz um bis zu 300% mit unserem intelligenten Call Center.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="text-lg px-12 py-6 bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white border-0 animate-glow">
              <Phone className="h-6 w-6 mr-3" />
              Sofort loslegen - Kostenlos
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-12 py-6 border-primary/30 text-primary hover:bg-primary/5 backdrop-blur-sm">
              Live Demo ansehen
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center animate-slide-up">
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">99.9%</div>
              <p className="text-muted-foreground">Verfügbarkeit</p>
            </div>
            <div className="text-center animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">25+</div>
              <p className="text-muted-foreground">Sprachen</p>
            </div>
            <div className="text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">2.5M+</div>
              <p className="text-muted-foreground">Zufriedene Kunden</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-primary">
              Die Zukunft der Kundenbetreuung
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Erleben Sie KI-gestützte Services, die Ihre Kunden begeistern
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="group hover:scale-105 transition-all duration-500 bg-gradient-glass backdrop-blur-sm border-white/10 hover:border-electric-blue/30 animate-slide-up">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:animate-glow">
                  <Headphones className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl mb-4 text-primary">AI-Powered Calls</CardTitle>
                <CardDescription className="text-base">
                  Intelligente Gesprächsführung mit natürlicher Spracherkennung
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 text-neon-green mr-3" />
                    Emotionale Intelligenz
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 text-neon-green mr-3" />
                    Echtzeit-Übersetzung
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 text-neon-green mr-3" />
                    Sentiment Analysis
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-500 bg-gradient-glass backdrop-blur-sm border-white/10 hover:border-electric-blue/30 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-secondary rounded-2xl flex items-center justify-center group-hover:animate-glow">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl mb-4 text-primary">24/7 Automation</CardTitle>
                <CardDescription className="text-base">
                  Nie wieder verpasste Anrufe oder unzufriedene Kunden
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 text-neon-green mr-3" />
                    Automatische Weiterleitung
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 text-neon-green mr-3" />
                    Smart Scheduling
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 text-neon-green mr-3" />
                    Predictive Analytics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-500 bg-gradient-glass backdrop-blur-sm border-white/10 hover:border-electric-blue/30 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:animate-glow">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl mb-4 text-primary">Global Reach</CardTitle>
                <CardDescription className="text-base">
                  Weltweite Expansion ohne geografische Grenzen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 text-neon-green mr-3" />
                    25+ Sprachen nativ
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 text-neon-green mr-3" />
                    Kulturelle Anpassung
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 text-neon-green mr-3" />
                    Lokale Präsenz
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/5 to-secondary/5 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 text-primary">
              Messbare Ergebnisse in 30 Tagen
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Unsere Kunden erleben durchschnittlich diese Verbesserungen:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">+300%</div>
                <p className="text-sm text-muted-foreground">Umsatzsteigerung</p>
              </div>
              <div className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">-70%</div>
                <p className="text-sm text-muted-foreground">Operative Kosten</p>
              </div>
              <div className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">95%</div>
                <p className="text-sm text-muted-foreground">Kundenzufriedenheit</p>
              </div>
              <div className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">0.3s</div>
                <p className="text-sm text-muted-foreground">Antwortzeit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-transparent to-neon-green/10"></div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h2 className="text-6xl font-bold mb-8 text-primary">
            Bereit für die Zukunft?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Starten Sie noch heute und erleben Sie, wie KI-gestützte Kundenbetreuung 
            Ihr Business revolutioniert.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" className="text-lg px-12 py-6 bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white border-0 animate-glow">
              <Phone className="h-6 w-6 mr-3" />
              Jetzt kostenlos starten
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-12 py-6 border-primary/30 text-primary hover:bg-primary/5 backdrop-blur-sm">
              <Mail className="h-6 w-6 mr-3" />
              Beratungstermin buchen
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-8 opacity-70">
            <Badge variant="outline" className="bg-gradient-glass border-white/20 backdrop-blur-sm">
              ISO 27001
            </Badge>
            <Badge variant="outline" className="bg-gradient-glass border-white/20 backdrop-blur-sm">
              GDPR Konform
            </Badge>
            <Badge variant="outline" className="bg-gradient-glass border-white/20 backdrop-blur-sm">
              SOC 2 Type II
            </Badge>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/5 border-t border-white/10 py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  MultiCall Pro
                </span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Die Zukunft der mehrsprachigen Kundenbetreuung. 
                KI-gestützt, global verfügbar, lokal relevant.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  +49 (0) 800 123 4567
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-primary">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>AI Call Center</li>
                <li>Multilingual Support</li>
                <li>24/7 Automation</li>
                <li>Analytics Dashboard</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-primary">Unternehmen</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Über uns</li>
                <li>Karriere</li>
                <li>Partner</li>
                <li>Presse</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 MultiCall Pro. Die Zukunft spricht alle Sprachen.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;