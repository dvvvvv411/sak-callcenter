
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Users } from "lucide-react";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Datenschutzerklärung
            </h1>
            <p className="text-lg text-muted-foreground">
              Informationen zur Verarbeitung Ihrer personenbezogenen Daten
            </p>
          </div>

          <div className="grid gap-8">
            <Card className="bg-gradient-glass backdrop-blur-xl border border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl text-primary">
                  <Shield className="h-6 w-6" />
                  <span>Datenschutz auf einen Blick</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-primary">Allgemeine Hinweise</h3>
                <p className="text-muted-foreground">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                  personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene 
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-glass backdrop-blur-xl border border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl text-primary">
                  <Eye className="h-6 w-6" />
                  <span>Datenerfassung auf unserer Website</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-primary">Wer ist verantwortlich für die Datenerfassung?</h3>
                <p className="text-muted-foreground">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                  Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </p>
                
                <h3 className="font-semibold text-primary">Wie erfassen wir Ihre Daten?</h3>
                <p className="text-muted-foreground">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                  Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-glass backdrop-blur-xl border border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl text-primary">
                  <Lock className="h-6 w-6" />
                  <span>Ihre Rechte</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und 
                  Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem 
                  ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-glass backdrop-blur-xl border border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl text-primary">
                  <Users className="h-6 w-6" />
                  <span>Kontaktformular</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
                  aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                  zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-glass backdrop-blur-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Kontakt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bei Fragen zum Datenschutz wenden Sie sich bitte an:<br />
                  E-Mail: datenschutz@sak-service.de<br />
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

export default Datenschutz;
