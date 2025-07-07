
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Calendar, MessageSquare } from "lucide-react";

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Telefon",
      description: "Sprechen Sie direkt mit unseren Experten",
      contact: "+49 (0) 30 123 456 789",
      action: "Jetzt anrufen",
      available: "Mo-Fr 8:00-18:00 Uhr"
    },
    {
      icon: Mail,
      title: "E-Mail",
      description: "Schreiben Sie uns Ihre Anfrage",
      contact: "info@sak-callcenter.de",
      action: "E-Mail senden",
      available: "24/7 verfügbar"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chatten Sie mit unserem Support-Team",
      contact: "Live Chat starten",
      action: "Chat öffnen",
      available: "Mo-Fr 8:00-20:00 Uhr"
    },
    {
      icon: Calendar,
      title: "Termin buchen",
      description: "Vereinbaren Sie einen persönlichen Beratungstermin",
      contact: "Online Terminbuchung",
      action: "Termin buchen",
      available: "Flexible Zeiten"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-2xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Weitere Kontaktmöglichkeiten
              </span>
            </h2>
            <p className="text-muted-foreground">
              Wählen Sie den für Sie passenden Kontaktweg. Wir sind für Sie da.
            </p>
          </div>

          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:scale-105 transition-all duration-300 bg-gradient-glass backdrop-blur-sm border-white/10 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <method.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg font-semibold">{method.title}</h3>
                      <p className="text-muted-foreground text-sm">{method.description}</p>
                      <div className="text-primary font-medium">{method.contact}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {method.available}
                        </span>
                        <Button size="sm" variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-white">
                          {method.action}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-glass backdrop-blur-sm border-white/10 shadow-lg">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Unser Standort</h3>
                <div className="text-muted-foreground space-y-1">
                  <div>CallCenter Pro GmbH</div>
                  <div>Friedrichstraße 123</div>
                  <div>10117 Berlin</div>
                  <div>Deutschland</div>
                </div>
              </div>
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-white">
                Route planen
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
