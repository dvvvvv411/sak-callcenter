import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Clock, Users, Headphones, Check } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Phone className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">MultiCall Pro</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Über uns</Button>
            <Button variant="ghost">Services</Button>
            <Button variant="outline">
              <Phone className="h-4 w-4 mr-2" />
              +49 (0) 800 123 4567
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6" variant="secondary">
            24/7 Mehrsprachiger Service
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Ihr professionelles Call Center für internationale Kundenbetreuung
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Wir sprechen über 25 Sprachen und betreuen Ihre Kunden rund um die Uhr. 
            Professionell, zuverlässig und in ihrer Muttersprache.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Phone className="h-5 w-5 mr-2" />
              Kostenloses Beratungsgespräch
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Referenzen ansehen
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Unsere Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professionelle Kundenbetreuung in über 25 Sprachen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Headphones className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Inbound Call Center</CardTitle>
                <CardDescription>
                  Professionelle Annahme Ihrer eingehenden Anrufe in der Sprache Ihrer Kunden
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Kundenservice & Support</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Bestellannahme</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Technischer Support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Outbound Services</CardTitle>
                <CardDescription>
                  Aktive Kundenansprache und Leadgenerierung in Ihrer Zielsprache
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Kaltakquise</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Marktforschung</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Kundenbefragungen</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Multichannel Support</CardTitle>
                <CardDescription>
                  E-Mail, Chat und Social Media Betreuung in allen wichtigen Sprachen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />E-Mail Support</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Live Chat</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Social Media</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Warum MultiCall Pro?</h2>
            <p className="text-xl text-muted-foreground">
              Ihre Vorteile im Überblick
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Verfügbarkeit</h3>
              <p className="text-sm text-muted-foreground">
                Rund um die Uhr für Ihre Kunden da
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">25+ Sprachen</h3>
              <p className="text-sm text-muted-foreground">
                Muttersprachliche Kundenbetreuung
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Check className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">ISO Zertifiziert</h3>
              <p className="text-sm text-muted-foreground">
                Höchste Qualitätsstandards
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Erfahrene Agents</h3>
              <p className="text-sm text-muted-foreground">
                Über 10 Jahre Branchenerfahrung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Branchen & Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Spezialisiert auf verschiedene Industriezweige
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "E-Commerce & Online-Handel",
              "Finanzdienstleistungen",
              "Gesundheitswesen",
              "Technologie & Software",
              "Reise & Tourismus", 
              "Immobilien"
            ].map((industry, index) => (
              <Card key={index} className="hover:bg-muted/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold">{industry}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Über 500 zufriedene Kunden vertrauen uns</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Zufriedene Kunden</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Sprachen</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.8%</div>
              <p className="text-muted-foreground">Verfügbarkeit</p>
            </div>
          </div>

          <div className="flex justify-center space-x-8 opacity-60">
            {/* Trust badges/logos would go here */}
            <Badge variant="outline">ISO 9001</Badge>
            <Badge variant="outline">GDPR Konform</Badge>
            <Badge variant="outline">TÜV Zertifiziert</Badge>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">
            Bereit für internationalen Erfolg?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Kontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch 
            und erfahren Sie, wie wir Ihr Unternehmen international erfolgreich machen können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Phone className="h-5 w-5 mr-2" />
              +49 (0) 800 123 4567
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Mail className="h-5 w-5 mr-2" />
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Phone className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">MultiCall Pro</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Ihr Partner für professionelle, mehrsprachige Kundenbetreuung.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Inbound Call Center</li>
                <li>Outbound Services</li>
                <li>Multichannel Support</li>
                <li>Übersetzungsservice</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Unternehmen</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Über uns</li>
                <li>Karriere</li>
                <li>Referenzen</li>
                <li>Qualität</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+49 (0) 800 123 4567</li>
                <li>info@multicallpro.de</li>
                <li>24/7 Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 MultiCall Pro. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
