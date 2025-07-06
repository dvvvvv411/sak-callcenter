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

      {/* Interactive Features */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-primary">
              Bewährte Lösungen für Ihren Erfolg
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professionelle Services, die sich in der Praxis bewährt haben
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="group hover:scale-105 transition-all duration-500 bg-gradient-glass backdrop-blur-sm border-white/10 hover:border-electric-blue/30 animate-slide-up">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:animate-glow">
                  <Headphones className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl mb-4 text-primary">Professionelle Beratung</CardTitle>
                <CardDescription className="text-base">
                  Geschulte Mitarbeiter mit technischer Unterstützung für optimale Ergebnisse
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 text-neon-green mr-3" />
                    Geschulte Fachkräfte
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 text-neon-green mr-3" />
                    Mehrsprachige Betreuung
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 text-neon-green mr-3" />
                    Qualitätskontrolle
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-500 bg-gradient-glass backdrop-blur-sm border-white/10 hover:border-electric-blue/30 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-secondary rounded-2xl flex items-center justify-center group-hover:animate-glow">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl mb-4 text-primary">Erweiterte Erreichbarkeit</CardTitle>
                <CardDescription className="text-base">
                  Flexible Servicezeiten und zuverlässige Anrufannahme
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 text-neon-green mr-3" />
                    Professionelle Weiterleitung
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 text-neon-green mr-3" />
                    Flexible Dienstzeiten
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 text-neon-green mr-3" />
                    Detaillierte Berichte
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
                    12 Sprachen verfügbar
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 text-neon-green mr-3" />
                    Kulturelle Kompetenz
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 text-neon-green mr-3" />
                    Regionale Expertise
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
