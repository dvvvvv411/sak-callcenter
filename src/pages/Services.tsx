
import Navigation from "@/components/shared/Navigation";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCategories from "@/components/services/ServiceCategories";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceCTA from "@/components/services/ServiceCTA";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ServiceHero />
      <ServiceCategories />
      <ServiceFeatures />
      <ServiceCTA />
    </div>
  );
};

export default Services;
