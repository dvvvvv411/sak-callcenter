
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle, AlertCircle, Scale } from "lucide-react";

const AGB = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Allgemeine Geschäftsbedingungen
            </h1>
            <p className="text-lg text-muted-foreground">
              Bedingungen für die Nutzung unserer Services
            </p>
          </div>

          <div className="grid gap-8">
            <Card className="bg-gradient-glass backdrop-blur-xl border border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl text-primary">
                  <FileText className="h-6 w-6" />
                  <span>§ 1 Geltungsbereich</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen 
                  der SAK Service GmbH und ihren Kunden über die Erbringung von Call-Center-Dienstleistungen 
                  und damit verbundenen Services.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-glass backdrop-blur-xl border border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl text-primary">
                  <CheckCircle className="h-6 w-6" />
                  <span>§ 2 Vertragsschluss</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Der Vertrag kommt durch die schriftliche Bestätigung unseres Angebots durch den 
                  Kunden oder durch die Auftragsbestätigung der SAK Service GmbH zustande. Mündliche 
                  Nebenabreden bedürfen der schriftlichen Bestätigung.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-glass backdrop-blur-xl border border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl text-primary">
                  <Scale className="h-6 w-6" />
                  <span>§ 3 Leistungsumfang</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Der Umfang unserer Leistungen ergibt sich aus der jeweiligen Auftragsbestätigung 
                  und den darin enthaltenen Leistungsbeschreibungen. Änderungen des Leistungsumfangs 
                  bedürfen der schriftlichen Vereinbarung.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Professionelle Anrufannahme und -weiterleitung</li>
                  <li>Mehrsprachiger Kundenservice</li>
                  <li>Terminvereinbarungen und Nachfassdienste</li>
                  <li>Detaillierte Gesprächsberichte</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-glass backdrop-blur-xl border border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl text-primary">
                  <AlertCircle className="h-6 w-6" />
                  <span>§ 4 Preise und Zahlungsbedingungen</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Es gelten die zum Zeitpunkt der Auftragserteilung gültigen Preise. Alle Preise 
                  verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Die Rechnungsstellung 
                  erfolgt monatlich im Voraus.
                </p>
                <p className="text-muted-foreground">
                  Zahlungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug fällig.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-glass backdrop-blur-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">§ 5 Vertragslaufzeit und Kündigung</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Die Mindestvertragslaufzeit beträgt 12 Monate, sofern nicht anders vereinbart. 
                  Der Vertrag verlängert sich automatisch um weitere 12 Monate, wenn er nicht 
                  mit einer Frist von 3 Monaten zum Ende der Laufzeit gekündigt wird.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-glass backdrop-blur-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">§ 6 Datenschutz und Vertraulichkeit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Wir verpflichten uns, alle im Rahmen der Auftragsabwicklung bekannt gewordenen 
                  Informationen streng vertraulich zu behandeln und die geltenden Datenschutzbestimmungen 
                  einzuhalten.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-glass backdrop-blur-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Kontakt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bei Fragen zu diesen AGB wenden Sie sich bitte an:<br />
                  E-Mail: info@sak-callcenter.de<br />
                  Telefon: +49 (0) 800 123 4567
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

export default AGB;
