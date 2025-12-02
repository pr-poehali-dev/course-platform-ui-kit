import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CourseCatalog from "@/components/CourseCatalog";
import Teachers from "@/components/Teachers";
import Testimonials from "@/components/Testimonials";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <CourseCatalog />
      <Teachers />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;