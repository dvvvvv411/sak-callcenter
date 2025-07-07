
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    features: string[];
    detailedDescription: string;
    benefits: string[];
    useCases: string[];
  } | null;
}

const ServiceDetailsDialog = ({ isOpen, onClose, service }: ServiceDetailsDialogProps) => {
  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {service.title}
          </DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground">
            {service.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Detaillierte Beschreibung</h3>
            <p className="text-muted-foreground leading-relaxed">
              {service.detailedDescription}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Ihre Vorteile</h3>
            <ul className="grid md:grid-cols-2 gap-2">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-neon-green flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Typische Anwendungsfälle</h3>
            <ul className="space-y-2">
              {service.useCases.map((useCase, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <ArrowRight className="h-4 w-4 text-neon-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Enthaltene Features</h3>
            <ul className="grid md:grid-cols-2 gap-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-neon-green flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="flex-1">
                <Button className="w-full bg-gradient-primary text-white hover:scale-105 transition-all duration-300">
                  <Phone className="h-4 w-4 mr-2" />
                  Jetzt anfragen
                </Button>
              </Link>
              <Link to="/pricing" className="flex-1">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                  Preise ansehen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailsDialog;
