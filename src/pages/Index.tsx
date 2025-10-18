import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Concept />
      <Portfolio />
      <Benefits />
      <Pricing />
      <CTA />
    </main>
  );
};

export default Index;
