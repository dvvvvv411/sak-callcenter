
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const PricingFAQ = () => {
  const faqs = [
    {
      question: "Gibt es versteckte Kosten oder Setup-Gebühren?",
      answer: "Nein, absolut nicht. Alle unsere Preise sind transparent und beinhalten alle Leistungen. Es gibt keine Setup-Gebühren, keine Vertragsbindung und keine versteckten Kosten."
    },
    {
      question: "Kann ich mein Paket jederzeit wechseln?",
      answer: "Ja, Sie können Ihr Paket jederzeit ohne Kündigungsfrist wechseln. Upgrades sind sofort wirksam, bei Downgrades gilt die Änderung ab dem nächsten Abrechnungszeitraum."
    },
    {
      question: "Was passiert wenn ich mehr Gespräche als geplant habe?",
      answer: "Kein Problem! Zusätzliche Gespräche werden einfach zum gleichen Tarif abgerechnet. Sie erhalten eine transparente Abrechnung und können jederzeit zu einem höheren Paket wechseln."
    },
    {
      question: "Sind die Preise inklusive oder exklusive Mehrwertsteuer?",
      answer: "Alle angegebenen Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer. Für Geschäftskunden innerhalb der EU gelten die B2B-Regelungen."
    },
    {
      question: "Gibt es Rabatte für langfristige Verträge?",
      answer: "Wir bieten bewusst keine langfristigen Verträge an, um Ihnen maximale Flexibilität zu gewähren. Unsere Preise sind bereits sehr kompetitiv ohne Vertragsbindung."
    },
    {
      question: "Welche Zahlungsmethoden akzeptieren Sie?",
      answer: "Wir akzeptieren alle gängigen Zahlungsmethoden: SEPA-Lastschrift, Kreditkarte, PayPal und Rechnung (nach Bonitätsprüfung). Die Abrechnung erfolgt monatlich."
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Häufige Fragen zu Preisen
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren Tarifen und Konditionen.
          </p>
        </div>

        <div className="grid gap-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover:scale-102 transition-all duration-300 bg-gradient-glass backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
