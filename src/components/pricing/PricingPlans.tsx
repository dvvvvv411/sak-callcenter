
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

const PricingPlans = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "2,50",
      period: "pro Gespräch",
      description: "Perfekt für kleine Unternehmen und E-Commerce Startups",
      features: [
        "Bis zu 100 Gespräche/Monat",
        "Grundlegende Kundenbetreuung",
        "E-Mail Support",
        "Standard Arbeitszeiten",
        "Deutsch & Englisch",
        "Basis-Reporting"
      ],
      popular: false,
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Professional",
      icon: Star,
      price: "1,90",
      period: "pro Gespräch",
      description: "Ideal für wachsende Unternehmen mit höherem Gesprächsaufkommen",
      features: [
        "Bis zu 500 Gespräche/Monat",
        "Erweiterte Kundenbetreuung",
        "Priority Support",
        "Erweiterte Arbeitszeiten",
        "5 Sprachen inklusive",
        "Detaillierte Analytics",
        "CRM Integration",
        "Live-Chat Support"
      ],
      popular: true,
      color: "from-green-400 to-green-600"
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "1,20",
      period: "pro Gespräch",
      description: "Maßgeschneiderte Lösung für große Unternehmen",
      features: [
        "Unlimited Gespräche",
        "Dedicated Account Manager",
        "24/7 Premium Support",
        "15+ Sprachen",
        "Custom Integrations",
        "White-Label Lösung",
        "SLA Garantien",
        "Onsite Training",
        "Custom Reporting"
      ],
      popular: false,
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Wählen Sie Ihr Paket
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Alle Pakete beinhalten modernste Technologie, DSGVO-Konformität und 
            können jederzeit ohne Vertragsbindung gewechselt werden.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative hover:scale-105 transition-all duration-300 bg-gradient-glass backdrop-blur-sm border-white/10 shadow-lg ${
                plan.popular ? 'ring-2 ring-neon-green/50 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-neon-green text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Beliebteste Wahl
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">
                    {plan.price}€
                  </div>
                  <div className="text-muted-foreground">{plan.period}</div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-neon-green flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-primary text-white' 
                      : 'bg-background border border-primary text-primary hover:bg-primary hover:text-white'
                  } hover:scale-105 transition-all duration-300`}
                  size="lg"
                >
                  {plan.name} wählen
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            Alle Preise verstehen sich zzgl. MwSt. Keine Setup-Gebühren, keine Vertragsbindung.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-neon-green" />
              <span>30 Tage Geld-zurück-Garantie</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-neon-green" />
              <span>Monatlich kündbar</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-neon-green" />
              <span>DSGVO-konform</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
