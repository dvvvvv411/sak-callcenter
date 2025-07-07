
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Building2, Users, Headphones, ArrowRight } from "lucide-react";
import ServiceDetailsDialog from "./ServiceDetailsDialog";

const ServiceCategories = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const categories = [
    {
      icon: ShoppingCart,
      title: "E-Commerce Support",
      description: "Komplette Kundenbetreuung für Online-Shops: Bestellannahme, Reklamationen, Live-Chat und technischer Support.",
      features: [
        "Bestellannahme & -verfolgung",
        "Reklamationsmanagement",
        "Live-Chat Integration",
        "Mehrsprachiger Support"
      ],
      popular: true,
      detailedDescription: "Unser E-Commerce Support-Service ist speziell für Online-Händler entwickelt worden, die ihren Kunden einen erstklassigen Service bieten möchten. Wir übernehmen die komplette Kundenbetreuung von der ersten Anfrage bis zur finalen Problemlösung. Unsere erfahrenen Agenten sind in allen gängigen E-Commerce-Plattformen geschult und können nahtlos in Ihre bestehenden Systeme integriert werden.",
      benefits: [
        "Steigerung der Kundenzufriedenheit um durchschnittlich 35%",
        "Reduzierung der Bearbeitungszeit um bis zu 50%",
        "24/7 Verfügbarkeit für internationale Kunden",
        "Kostenersparnis von bis zu 60% gegenüber eigenen Mitarbeitern",
        "Skalierbarkeit je nach Saison und Bedarf",
        "Professionelle Konfliktlösung bei Reklamationen"
      ],
      useCases: [
        "Online-Shops mit hohem Bestellvolumen (100+ Bestellungen/Tag)",
        "Internationale E-Commerce-Unternehmen mit mehrsprachigen Anforderungen",
        "Saisonale Geschäfte mit schwankenden Supportanfragen",
        "Startups die schnell professionellen Support aufbauen möchten",
        "Etablierte Händler die Kosten optimieren wollen"
      ]
    },
    {
      icon: Building2,
      title: "B2B Services",
      description: "Professionelle Geschäftskommunikation für B2B-Unternehmen: Lead-Generierung, Terminvereinbarung und Kundenbetreuung.",
      features: [
        "Lead-Qualifizierung",
        "Terminvereinbarung",
        "Kundenakquise",
        "Account Management"
      ],
      popular: false,
      detailedDescription: "Speziell für B2B-Unternehmen entwickelte Kommunikationslösungen, die darauf ausgelegt sind, hochwertige Geschäftskontakte zu generieren und zu pflegen. Unsere Agenten verstehen die Komplexität von B2B-Verkaufszyklen und können professionell mit Entscheidern auf allen Ebenen kommunizieren. Durch gezielte Lead-Qualifizierung und systematisches Follow-up maximieren wir Ihre Conversion-Raten.",
      benefits: [
        "Erhöhung der Lead-Qualität um durchschnittlich 40%",
        "Verkürzung des Sales-Cycles durch professionelle Vorqualifizierung",
        "Systematische CRM-Integration und Datenmanagement",
        "Erhöhung der Terminvereinbarungsrate um bis zu 60%",
        "Professionelle Repräsentation Ihres Unternehmens",
        "Skalierbare Kapazitäten für Kampagnen und Events"
      ],
      useCases: [
        "Softwareunternehmen mit komplexen Produkten",
        "Beratungsunternehmen für Terminvereinbarungen",
        "Technologie-Startups für Lead-Generierung",
        "Industrieunternehmen für internationale Märkte",
        "Dienstleister mit langen Verkaufszyklen"
      ]
    },
    {
      icon: Users,
      title: "Customer Service",
      description: "Umfassende Kundenbetreuung mit erfahrenen Agenten: First-Level-Support, Beschwerdemanagement und Kundenbindung.",
      features: [
        "First-Level-Support",
        "Beschwerdemanagement",
        "Kundenzufriedenheit",
        "Retention Management"
      ],
      popular: false,
      detailedDescription: "Unser umfassender Customer Service deckt alle Aspekte der Kundenbetreuung ab. Von der ersten Kontaktaufnahme bis zur langfristigen Kundenbindung sorgen unsere geschulten Agenten für eine konsistent hohe Servicequalität. Wir nutzen bewährte Methoden des Beschwerdemanagements und proaktive Kommunikation, um aus unzufriedenen Kunden loyale Botschafter zu machen.",
      benefits: [
        "Steigerung der Kundenbindung um bis zu 45%",
        "Reduzierung der Kündigungsrate um durchschnittlich 30%",
        "Verbesserung der NPS-Werte um 25+ Punkte",
        "Effiziente Eskalationsprozesse für komplexe Fälle",
        "Proaktive Kundenkommunikation zur Problemprävention",
        "Detaillierte Kundenanalysen und Feedback-Reports"
      ],
      useCases: [
        "SaaS-Unternehmen mit wiederkehrenden Kunden",
        "Abonnement-basierte Services",
        "Premium-Marken mit hohen Qualitätsansprüchen",
        "Unternehmen in regulierten Branchen",
        "Wachstumsunternehmen die Qualität skalieren möchten"
      ]
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Spezialisierter technischer Support für komplexe Produkte: Troubleshooting, Installationshilfe und Expertensupport.",
      features: [
        "Troubleshooting",
        "Installationshilfe",
        "Remote-Support",
        "Escalation Management"
      ],
      popular: false,
      detailedDescription: "Unser Technical Support-Team besteht aus zertifizierten IT-Experten, die komplexe technische Probleme schnell und effizient lösen können. Von der Grundinstallation bis zur erweiterten Fehlerbehebung bieten wir mehrstufigen Support mit klaren Eskalationswegen. Unsere Agenten sind in den neuesten Technologien geschult und können sowohl Remote- als auch telefonischen Support anbieten.",
      benefits: [
        "Reduzierung der Lösungszeit um bis zu 70%",
        "Erste-Hilfe-Lösung in über 80% der Fälle",
        "24/7 Verfügbarkeit für kritische Systeme",
        "Mehrsprachiger Support für internationale Teams",
        "Detaillierte Dokumentation aller Supportfälle",
        "Proaktive Wartung und Präventionsberatung"
      ],
      useCases: [
        "Software-Anbieter mit komplexen Produkten",
        "Hardware-Hersteller für Endkundensupport",
        "IT-Dienstleister für White-Label-Support",
        "Cloud-Services mit kritischen Anwendungen",
        "Unternehmen mit internationalen technischen Teams"
      ]
    }
  ];

  const handleLearnMore = (category: any) => {
    setSelectedService(category);
    setIsDialogOpen(true);
  };

  return (
    <>
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Unsere Service-Kategorien
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Spezialisierte Lösungen für verschiedene Branchen und Anforderungen - 
              alle mit höchsten Qualitätsstandards und modernster Technologie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className={`relative hover:scale-105 transition-all duration-300 bg-gradient-glass backdrop-blur-sm border-white/10 shadow-lg ${
                  category.popular ? 'ring-2 ring-neon-green/50' : ''
                }`}
              >
                {category.popular && (
                  <div className="absolute -top-3 left-6 bg-neon-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Beliebt
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <ArrowRight className="h-4 w-4 text-neon-green" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => handleLearnMore(category)}
                    className="w-full bg-gradient-primary text-white hover:scale-105 transition-all duration-300"
                  >
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ServiceDetailsDialog 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        service={selectedService}
      />
    </>
  );
};

export default ServiceCategories;
