import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorkShowcase from "@/components/WorkShowcase";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <WorkShowcase />
        <TechStack />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
