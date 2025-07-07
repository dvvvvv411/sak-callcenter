
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, TrendingDown } from "lucide-react";

const PricingComparison = () => {
  const comparisons = [
    {
      title: "Traditionelle Call Center",
      price: "4,50€ - 6,00€",
      period: "pro Gespräch",
      features: [
        { name: "Setup-Kosten", included: false, note: "1.500€ - 5.000€" },
        { name: "Vertragsbindung", included: false, note: "12-24 Monate" },
        { name: "Flexible Skalierung", included: false },
        { name: "Moderne Technologie", included: false },
        { name: "Mehrsprachiger Support", included: true, note: "Aufpreis" },
        { name: "24/7 Verfügbarkeit", included: true, note: "Aufpreis" },
        { name: "Detaillierte Berichte", included: false, note: "Aufpreis" },
        { name: "Integration Support", included: false, note: "Aufpreis" }
      ],
      color: "bg-red-50 border-red-200"
    },
    {
      title: "CallCenter Pro",
      price: "1,20€ - 2,50€",
      period: "pro Gespräch",
      features: [
        { name: "Setup-Kosten", included: true, note: "Kostenlos" },
        { name: "Vertragsbindung", included: true, note: "Keine" },
        { name: "Flexible Skalierung", included: true },
        { name: "Moderne Technologie", included: true },
        { name: "Mehrsprachiger Support", included: true, note: "Inklusive" },
        { name: "24/7 Verfügbarkeit", included: true, note: "Inklusive" },
        { name: "Detaillierte Berichte", included: true, note: "Inklusive" },
        { name: "Integration Support", included: true, note: "Inklusive" }
      ],
      color: "bg-green-50 border-green-200 ring-2 ring-neon-green/20"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingDown className="h-8 w-8 text-neon-green" />
            <span className="text-2xl font-bold text-neon-green">Bis zu 60% Ersparnis</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Preisvergleich
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sehen Sie selbst, wie viel Sie mit CallCenter Pro im Vergleich zu 
            traditionellen Anbietern sparen können.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {comparisons.map((comparison, index) => (
            <Card key={index} className={`${comparison.color} hover:scale-105 transition-all duration-300`}>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-4">{comparison.title}</CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">
                    {comparison.price}
                  </div>
                  <div className="text-muted-foreground">{comparison.period}</div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4">
                  {comparison.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                        )}
                        <span className="text-sm font-medium">{feature.name}</span>
                      </div>
                      {feature.note && (
                        <span className={`text-xs px-2 py-1 rounded ${
                          feature.included 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {feature.note}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-glass backdrop-blur-sm border border-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-neon-green">
              Beispielrechnung für 1.000 Gespräche/Monat:
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-lg">
              <div>
                <div className="text-muted-foreground mb-2">Traditioneller Anbieter:</div>
                <div className="text-2xl font-bold text-red-600">5.250€/Monat</div>
                <div className="text-sm text-muted-foreground">
                  (5,25€ pro Gespräch + Setup-Kosten)
                </div>
              </div>
              <div>
                <div className="text-muted-foreground mb-2">CallCenter Pro:</div>
                <div className="text-2xl font-bold text-neon-green">1.900€/Monat</div>
                <div className="text-sm text-muted-foreground">
                  (1,90€ pro Gespräch, keine Setup-Kosten)
                </div>
              </div>
            </div>
            <div className="mt-6 text-xl font-bold text-primary">
              Ihre Ersparnis: 3.350€ pro Monat (64% günstiger!)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
