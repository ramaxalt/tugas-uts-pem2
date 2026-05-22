import BackgroundGlow from "./components/BackgroundGlow";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans overflow-x-hidden">
      <BackgroundGlow />
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}