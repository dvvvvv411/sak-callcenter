
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-t border-primary/20 py-16 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-neon-green/5"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-electric-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-neon-green/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://i.imgur.com/CIi9DJl.png" 
                alt="SAK Logo" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Professionelle mehrsprachige Kundenbetreuung. 
              Bewährt seit 7 Jahren, global verfügbar, lokal kompetent.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Musterstraße 123, 12345 Musterstadt</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+49 (0) 800 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@sak-service.de</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-primary text-lg">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors">
                <Link to="/services" className="flex items-center space-x-2">
                  <span>Professionelles Call Center</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li className="hover:text-primary transition-colors">
                <Link to="/services" className="flex items-center space-x-2">
                  <span>Mehrsprachiger Support</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li className="hover:text-primary transition-colors">
                <Link to="/services" className="flex items-center space-x-2">
                  <span>Erweiterte Servicezeiten</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li className="hover:text-primary transition-colors">
                <Link to="/pricing" className="flex items-center space-x-2">
                  <span>Preise & Pakete</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal & Company */}
          <div>
            <h4 className="font-semibold mb-4 text-primary text-lg">Rechtliches</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors">
                <Link to="/impressum" className="flex items-center space-x-2">
                  <span>Impressum</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li className="hover:text-primary transition-colors">
                <Link to="/datenschutz" className="flex items-center space-x-2">
                  <span>Datenschutz</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li className="hover:text-primary transition-colors">
                <Link to="/agb" className="flex items-center space-x-2">
                  <span>AGB</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li className="hover:text-primary transition-colors">
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Kontakt</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="border-t border-primary/20 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Bereit für professionelle Kundenbetreuung?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Starten Sie noch heute mit unserem bewährten Service und erweitern Sie 
              Ihre Reichweite mit mehrsprachiger Kundenbetreuung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary text-white hover:scale-105 transition-all duration-300 shadow-xl">
                  <Phone className="h-5 w-5 mr-2" />
                  Jetzt kostenlos starten
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/5 hover:scale-105 transition-all duration-300">
                  <Mail className="h-5 w-5 mr-2" />
                  Preise ansehen
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              &copy; 2025 SAK GmbH. Seit 7 Jahren Ihr Partner für professionelle Kundenbetreuung.
            </p>
            <div className="flex items-center space-x-6 text-xs text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                <span>Live Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse"></div>
                <span>ISO 27001 Zertifiziert</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-primary rounded-full animate-pulse"></div>
                <span>GDPR Konform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
