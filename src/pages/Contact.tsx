
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactCTA from "@/components/contact/ContactCTA";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Contact;
