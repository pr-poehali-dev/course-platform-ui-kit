import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickStats from "@/components/QuickStats";
import UserScenarios from "@/components/UserScenarios";
import CourseCatalog from "@/components/CourseCatalog";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Teachers from "@/components/Teachers";
import Testimonials from "@/components/Testimonials";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <QuickStats />
      <UserScenarios />
      <CourseCatalog />
      <UpcomingWebinars />
      <Teachers />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;