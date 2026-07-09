import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Services from "@/components/home/Services";
import Gallery from "@/components/home/Gallery";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Gallery />
      <Contact /> 
      <Footer /> 
    </>
  );
}