import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Clock, Users, Headphones, Check, Star, ArrowUp, ChevronRight } from "lucide-react";
import HeroSection from "@/components/hero/HeroSection";

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
      <HeroSection />

      {/* Interactive Features - Made Smaller */}
      <section className="py-16 px-6 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-electric-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-electric-blue/3 to-neon-green/3 rounded-full blur-3xl opacity-30"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-glass backdrop-blur-sm border border-white/20 text-sm font-medium text-primary mb-6 animate-fade-in">
              <Star className="h-4 w-4 mr-2 text-neon-green" />
              Bewährt von 500+ Unternehmen
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary leading-tight animate-fade-in" style={{animationDelay: '0.1s'}}>
              Bewährte Lösungen für
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Ihren Erfolg
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              Professionelle Services, die sich in der Praxis bewährt haben und 
              messbare Ergebnisse liefern
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="group relative hover:scale-105 transition-all duration-700 bg-gradient-glass backdrop-blur-xl border border-white/20 hover:border-electric-blue/40 shadow-2xl hover:shadow-electric-blue/10 animate-fade-in overflow-hidden" style={{animationDelay: '0.3s'}}>
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-3xl flex items-center justify-center group-hover:animate-glow shadow-2xl transform group-hover:rotate-3 transition-transform duration-500">
                  <Headphones className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl mb-4 text-primary font-bold">Professionelle Beratung</CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  Geschulte Mitarbeiter mit technischer Unterstützung für optimale Ergebnisse
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-4">
                  <li className="flex items-center text-sm font-medium transform group-hover:translate-x-2 transition-transform duration-300">
                    <div className="w-6 h-6 rounded-full bg-neon-green/20 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-neon-green" />
                    </div>
                    Geschulte Fachkräfte
                  </li>
                  <li className="flex items-center text-sm font-medium transform group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '0.1s'}}>
                    <div className="w-6 h-6 rounded-full bg-neon-green/20 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-neon-green" />
                    </div>
                    Mehrsprachige Betreuung
                  </li>
                  <li className="flex items-center text-sm font-medium transform group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '0.2s'}}>
                    <div className="w-6 h-6 rounded-full bg-neon-green/20 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-neon-green" />
                    </div>
                    Qualitätskontrolle
                  </li>
                </ul>
                
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Durchschnittliche Bewertung</span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-neon-green text-neon-green" />
                      ))}
                      <span className="ml-2 font-semibold text-primary">4.9</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative hover:scale-105 transition-all duration-700 bg-gradient-glass backdrop-blur-xl border border-white/20 hover:border-neon-green/40 shadow-2xl hover:shadow-neon-green/10 animate-fade-in overflow-hidden" style={{animationDelay: '0.4s'}}>
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-secondary rounded-3xl flex items-center justify-center group-hover:animate-glow shadow-2xl transform group-hover:rotate-3 transition-transform duration-500">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl mb-4 text-primary font-bold">Erweiterte Erreichbarkeit</CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  Flexible Servicezeiten und zuverlässige Anrufannahme
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-4">
                  <li className="flex items-center text-sm font-medium transform group-hover:translate-x-2 transition-transform duration-300">
                    <div className="w-6 h-6 rounded-full bg-neon-green/20 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-neon-green" />
                    </div>
                    Professionelle Weiterleitung
                  </li>
                  <li className="flex items-center text-sm font-medium transform group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '0.1s'}}>
                    <div className="w-6 h-6 rounded-full bg-neon-green/20 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-neon-green" />
                    </div>
                    Flexible Dienstzeiten
                  </li>
                  <li className="flex items-center text-sm font-medium transform group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '0.2s'}}>
                    <div className="w-6 h-6 rounded-full bg-neon-green/20 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-neon-green" />
                    </div>
                    Detaillierte Berichte
                  </li>
                </ul>
                
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Verfügbarkeit</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                      <span className="font-semibold text-neon-green">24/7 aktiv</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative hover:scale-105 transition-all duration-700 bg-gradient-glass backdrop-blur-xl border border-white/20 hover:border-electric-blue/40 shadow-2xl hover:shadow-electric-blue/10 animate-fade-in overflow-hidden" style={{animationDelay: '0.5s'}}>
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-3xl flex items-center justify-center group-hover:animate-glow shadow-2xl transform group-hover:rotate-3 transition-transform duration-500">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl mb-4 text-primary font-bold">Global Reach</CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  Weltweite Expansion ohne geografische Grenzen
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-4">
                  <li className="flex items-center text-sm font-medium transform group-hover:translate-x-2 transition-transform duration-300">
                    <div className="w-6 h-6 rounded-full bg-neon-green/20 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-neon-green" />
                    </div>
                    12 Sprachen verfügbar
                  </li>
                  <li className="flex items-center text-sm font-medium transform group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '0.1s'}}>
                    <div className="w-6 h-6 rounded-full bg-neon-green/20 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-neon-green" />
                    </div>
                    Kulturelle Kompetenz
                  </li>
                  <li className="flex items-center text-sm font-medium transform group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '0.2s'}}>
                    <div className="w-6 h-6 rounded-full bg-neon-green/20 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-neon-green" />
                    </div>
                    Regionale Expertise
                  </li>
                </ul>
                
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Weltweite Abdeckung</span>
                    <div className="flex items-center space-x-1">
                      <span className="font-semibold text-primary">45+ Länder</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button size="lg" className="text-lg px-12 py-6 bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl text-white border-0 animate-glow">
              <ArrowUp className="h-6 w-6 mr-3 rotate-45" />
              Kostenloses Beratungsgespräch
            </Button>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/5 to-secondary/5 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 text-primary">
              Bewährte Ergebnisse unserer Kunden
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Durchschnittliche Verbesserungen nach 6 Monaten Zusammenarbeit:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">+25%</div>
                <p className="text-sm text-muted-foreground">Mehr Leads</p>
              </div>
              <div className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">-30%</div>
                <p className="text-sm text-muted-foreground">Weniger Kosten</p>
              </div>
              <div className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">92%</div>
                <p className="text-sm text-muted-foreground">Kundenzufriedenheit</p>
              </div>
              <div className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">&lt; 5s</div>
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
            Profitieren Sie von unserer 7-jährigen Erfahrung und erweitern Sie 
            Ihre Reichweite mit professioneller mehrsprachiger Kundenbetreuung.
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
                Professionelle mehrsprachige Kundenbetreuung. 
                Bewährt seit 7 Jahren, global verfügbar, lokal kompetent.
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
                <li>Professionelles Call Center</li>
                <li>Mehrsprachiger Support</li>
                <li>Erweiterte Servicezeiten</li>
                <li>Detaillierte Berichte</li>
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
            <p>&copy; 2025 MultiCall Pro. Seit 7 Jahren Ihr Partner für professionelle Kundenbetreuung.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
