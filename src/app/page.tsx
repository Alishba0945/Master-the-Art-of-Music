//rfce ** full form
import HeroPage from "@/app/components/HeroPage";
import Feature from "@/app/components/Feature"
import WhyChoose from "@/app/components/WhyChoose";
import MusicTestimonialCards from "./components/TestimonialCards";
import UpcomngWebinars from "./components/UpcomngWebinars";
import Instructor from "./components/Instructor";
import Footer from "./components/Footer";
import Contact from "./contact/page";

export default function Home() {
  return <main >
   
  <div className="min-h-screen bg-gray-900 antialiased bg-grid-white/[0.02] text-white justify-center flex ff">
    <HeroPage/> 
  </div>

  <Feature />
  <Instructor />
  <WhyChoose />  
  <MusicTestimonialCards />
  <UpcomngWebinars />
  <Contact />
  <Footer />
  </main>
};

