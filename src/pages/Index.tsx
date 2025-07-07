import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Clock, Users, Headphones, Check, Star, ArrowUp, ChevronRight, TrendingUp, BarChart3, Target, Zap } from "lucide-react";
import HeroSection from "@/components/hero/HeroSection";
import Navigation from "@/components/shared/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

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

      {/* Enhanced ROI Section - Made Smaller */}
      <section className="py-12 px-6 relative overflow-hidden">
        {/* Dynamic Background with Multiple Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-primary/5 to-neon-green/10"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon-green/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-electric-blue/3 to-neon-green/3 rounded-full blur-2xl opacity-40 animate-pulse"></div>
        
        {/* Geometric Decorations */}
        <div className="absolute top-10 right-1/4 w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-1/3 w-3 h-3 bg-electric-blue/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-10 w-1 h-20 bg-gradient-primary opacity-20 rotate-45"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Enhanced Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-glass backdrop-blur-sm border border-white/20 text-sm font-medium text-primary mb-4 animate-fade-in shadow-lg">
                <TrendingUp className="h-4 w-4 mr-2 text-neon-green animate-pulse" />
                Messbare Erfolge seit 7 Jahren
                <BarChart3 className="h-4 w-4 ml-2 text-electric-blue" />
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary leading-tight animate-fade-in" style={{animationDelay: '0.1s'}}>
                Bewährte Ergebnisse
                <span className="block bg-gradient-primary bg-clip-text text-transparent mt-2">
                  unserer Kunden
                </span>
              </h2>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-base lg:text-lg text-muted-foreground mb-3 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
                  Durchschnittliche Verbesserungen nach 6 Monaten Zusammenarbeit:
                </p>
                <div className="flex items-center justify-center space-x-3 animate-fade-in" style={{animationDelay: '0.3s'}}>
                  <div className="w-8 h-1 bg-gradient-primary rounded-full"></div>
                  <Target className="h-5 w-5 text-primary animate-pulse" />
                  <div className="w-8 h-1 bg-gradient-primary rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Stat Card 1 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-500"></div>
                <div className="relative bg-gradient-glass backdrop-blur-xl rounded-2xl p-4 lg:p-5 border border-white/20 hover:border-neon-green/40 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto mb-3 bg-gradient-to-br from-neon-green/20 to-neon-green/10 rounded-xl flex items-center justify-center group-hover:animate-glow">
                      <TrendingUp className="h-5 w-5 text-neon-green" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      +25%
                    </div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Mehr Leads</p>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-gradient-to-r from-neon-green to-electric-blue rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-500"></div>
                <div className="relative bg-gradient-glass backdrop-blur-xl rounded-2xl p-4 lg:p-5 border border-white/20 hover:border-electric-blue/40 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl animate-fade-in" style={{animationDelay: '0.5s'}}>
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto mb-3 bg-gradient-to-br from-electric-blue/20 to-electric-blue/10 rounded-xl flex items-center justify-center group-hover:animate-glow">
                      <BarChart3 className="h-5 w-5 text-electric-blue" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      -30%
                    </div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Weniger Kosten</p>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-gradient-to-r from-electric-blue to-neon-green rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-500"></div>
                <div className="relative bg-gradient-glass backdrop-blur-xl rounded-2xl p-4 lg:p-5 border border-white/20 hover:border-neon-green/40 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl animate-fade-in" style={{animationDelay: '0.6s'}}>
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto mb-3 bg-gradient-to-br from-neon-green/20 to-electric-blue/10 rounded-xl flex items-center justify-center group-hover:animate-glow">
                      <Star className="h-5 w-5 text-neon-green" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      92%
                    </div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Kundenzufriedenheit</p>
                    <div className="flex justify-center space-x-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-2.5 w-2.5 fill-neon-green text-neon-green animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat Card 4 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-500"></div>
                <div className="relative bg-gradient-glass backdrop-blur-xl rounded-2xl p-4 lg:p-5 border border-white/20 hover:border-electric-blue/40 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl animate-fade-in" style={{animationDelay: '0.7s'}}>
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto mb-3 bg-gradient-to-br from-electric-blue/20 to-neon-green/10 rounded-xl flex items-center justify-center group-hover:animate-glow">
                      <Zap className="h-5 w-5 text-electric-blue" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      &lt; 5s
                    </div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Antwortzeit</p>
                    <div className="flex items-center justify-center space-x-1 mt-2">
                      <div className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse"></div>
                      <div className="w-1.5 h-1.5 bg-electric-blue rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Bottom Section */}
            <div className="text-center mt-8 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-neon-green/10 to-electric-blue/10 backdrop-blur-sm border border-white/20 text-xs font-medium text-primary mb-4">
                <Check className="h-3 w-3 mr-2 text-neon-green" />
                Alle Ergebnisse basieren auf echten Kundendaten
                <BarChart3 className="h-3 w-3 ml-2 text-electric-blue" />
              </div>
              
              <div className="flex items-center justify-center space-x-6 opacity-80">
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                  <span>Real-time Tracking</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span>Verified Results</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span>ISO Certified</span>
                </div>
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
                <img 
                  src="https://i.imgur.com/CIi9DJl.png" 
                  alt="MultiCall Pro Logo" 
                  className="h-20 w-auto"
                />
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
