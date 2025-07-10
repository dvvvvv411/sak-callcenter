
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useEffect } from "react";

const Impressum = () => {
  useEffect(() => {
    document.title = "Impressum - SAK Service GmbH";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Impressum
            </h1>
            <p className="text-lg text-muted-foreground">
              Angaben gemäß § 5 TMG
            </p>
          </div>

          <div className="grid gap-8">
            <Card className="bg-gradient-glass backdrop-blur-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Anbieter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary">SAK Service GmbH</h3>
                    <p className="text-muted-foreground">
                      Buchkremerstr. 6<br />
                      52062 Aachen<br />
                      Deutschland
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <p className="text-muted-foreground">0241 53307091</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <p className="text-muted-foreground">info@sak-callcenter.de</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-glass backdrop-blur-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Geschäftsführung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Kai Uwe Müller</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-glass backdrop-blur-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Registereintrag</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  Registergericht: Amtsgericht Aachen<br />
                  Registernummer: HRB 22562
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-glass backdrop-blur-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Umsatzsteuer-ID</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                  DE361962834
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-glass backdrop-blur-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Verantwortlich für den Inhalt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Kai Uwe Müller<br />
                  Buchkremerstr. 6<br />
                  52062 Aachen
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impressum;
