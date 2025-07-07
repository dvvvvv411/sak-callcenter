
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactCTA from "@/components/contact/ContactCTA";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              CallCenter Pro
            </div>
            <div className="flex items-center space-x-6">
              <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="/services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="/pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
              <a href="/contact" className="text-primary font-medium">Contact</a>
              <Button size="sm" className="bg-gradient-primary text-white">
                <Phone className="h-4 w-4 mr-2" />
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactCTA />
    </div>
  );
};

export default Contact;
