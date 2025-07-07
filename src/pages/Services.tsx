
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCategories from "@/components/services/ServiceCategories";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceCTA from "@/components/services/ServiceCTA";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    document.title = "Services - SAK Service GmbH";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ServiceHero />
      <ServiceCategories />
      <ServiceFeatures />
      <ServiceCTA />
      <Footer />
    </div>
  );
};

export default Services;
