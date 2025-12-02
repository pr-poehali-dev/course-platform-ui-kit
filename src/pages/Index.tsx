import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CourseCatalog from "@/components/CourseCatalog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <CourseCatalog />
      <Footer />
    </div>
  );
};

export default Index;