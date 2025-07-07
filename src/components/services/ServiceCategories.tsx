
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Building2, Users, Headphones, ArrowRight } from "lucide-react";

const ServiceCategories = () => {
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
      popular: true
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
      popular: false
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
      popular: false
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
      popular: false
    }
  ];

  return (
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
                
                <Button className="w-full bg-gradient-primary text-white hover:scale-105 transition-all duration-300">
                  Mehr erfahren
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
