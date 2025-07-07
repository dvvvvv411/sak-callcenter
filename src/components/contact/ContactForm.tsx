
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, Building, Users, ShoppingCart, Headphones } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    newsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const services = [
    { value: "ecommerce", label: "E-Commerce Support", icon: ShoppingCart },
    { value: "b2b", label: "B2B Services", icon: Building },
    { value: "customer-service", label: "Customer Service", icon: Users },
    { value: "technical", label: "Technical Support", icon: Headphones }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <Card className="bg-gradient-glass backdrop-blur-sm border-white/10 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Kostenlose Beratung anfordern
              </span>
            </CardTitle>
            <p className="text-center text-muted-foreground">
              Füllen Sie das Formular aus und wir melden uns innerhalb von 2 Stunden bei Ihnen.
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Vorname *</label>
                  <Input
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    placeholder="Ihr Vorname"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nachname *</label>
                  <Input
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    placeholder="Ihr Nachname"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">E-Mail Adresse *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="max@unternehmen.de"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Unternehmen</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Ihr Unternehmen"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Telefon</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+49 123 456789"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Interessante Services</label>
                <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Wählen Sie einen Service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        <div className="flex items-center space-x-2">
                          <service.icon className="h-4 w-4" />
                          <span>{service.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Nachricht</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Beschreiben Sie Ihre Anforderungen..."
                  rows={4}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => setFormData({...formData, newsletter: checked as boolean})}
                />
                <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                  Ich möchte den Newsletter mit Updates und Angeboten erhalten
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-primary text-white hover:scale-105 transition-all duration-300"
                size="lg"
              >
                <Send className="h-5 w-5 mr-2" />
                Beratung anfordern
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Mit dem Absenden stimme ich der Verarbeitung meiner Daten gemäß der{" "}
                <a href="#" className="text-primary hover:underline">Datenschutzerklärung</a> zu.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
