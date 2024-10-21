import About from "../components/About/About";
import Available from "../components/Available/Available";
import Contact from "../components/Contact/Contact";
import CTA from "../components/CTA/CTA";
import FAQ from "../components/FAQ/FAQ";
import Fetures from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Teams from "../components/Teams/Teams";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Fetures />
      <Available />
      <About />
      <CTA />
      <Teams />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
