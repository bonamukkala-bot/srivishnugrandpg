import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Rooms from "@/components/Rooms";
import FloorPlan from "@/components/FloorPlan";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import ContactForm from "@/components/ContactForm";
import Footer, { WhatsAppFloat } from "@/components/Footer";
import Preloader from "@/components/Preloader";
import MobileActionBar from "@/components/MobileActionBar";
import SectionDivider from "@/components/SectionDivider";

export function HomePage() {
  return (
    <main className="bg-[#050e23] text-white overflow-x-hidden pb-20 md:pb-0">
      <Preloader />
      <Navbar />
      <Hero />
      <SectionDivider from="#050e23" to="#0a1a3a" />
      <TrustBar />
      <Rooms />
      <FloorPlan />
      <SectionDivider flip from="#050e23" to="#0a1a3a" />
      <Amenities />
      <SectionDivider from="#050e23" to="#0a1a3a" />
      <Gallery />
      <SectionDivider flip from="#0a1a3a" to="#050e23" />
      <Reviews />
      <SectionDivider from="#0a1a3a" to="#050e23" />
      <FAQ />
      <SectionDivider flip from="#050e23" to="#0a1a3a" />
      <Location />
      <SectionDivider from="#050e23" to="#0a1a3a" />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
      <MobileActionBar />
    </main>
  );
}

export default HomePage;
