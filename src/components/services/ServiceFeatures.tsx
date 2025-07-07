
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Globe, Zap, Users, BarChart } from "lucide-react";

const ServiceFeatures = () => {
  const features = [
    {
      icon: Shield,
      title: "DSGVO-Konform",
      description: "Vollständige Einhaltung deutscher und europäischer Datenschutzbestimmungen"
    },
    {
      icon: Clock,
      title: "24/7 Verfügbarkeit",
      description: "Rund um die Uhr verfügbar für Ihre Kunden in allen Zeitzonen"
    },
    {
      icon: Globe,
      title: "12+ Sprachen",
      description: "Muttersprachliche Agenten für internationale Märkte"
    },
    {
      icon: Zap,
      title: "Schnelle Integration",
      description: "Setup in 48h mit nahtloser Integration in Ihre Systeme"
    },
    {
      icon: Users,
      title: "Erfahrene Agenten",
      description: "Über 200 zertifizierte Kundenservice-Experten"
    },
    {
      icon: BarChart,
      title: "Detaillierte Berichte",
      description: "Umfassende Analytics und KPI-Tracking in Echtzeit"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Warum CallCenter Pro?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unsere bewährten Qualitätsstandards und moderne Technologie 
            sorgen für erstklassige Kundenerfahrungen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="hover:scale-105 transition-all duration-300 bg-gradient-glass backdrop-blur-sm border-white/10 shadow-lg"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
