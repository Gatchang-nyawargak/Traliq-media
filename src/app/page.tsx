// import { LayoutRouter } from "next/dist/server/app-render/entry-base";
// import ContactSection from "./components/ContactSector";
// import Footer from "./components/Footer";
// import HeroSection from "./components/HeroSection";
// import Navbar from "./components/Navbar/Navbar";
// import ValueProposition from "./components/ValuePreposition";



// export default function Home() {
//   return (
//     <div>
//       <Navbar/>
//       <HeroSection/>
//       <ValueProposition/>
//       <ContactSection/>
//       <Footer/>

//     </div>
//   );
// }



import ContentBundles from "./components/ContentBundles";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import ValueProposition from "./components/ValuePreposition"; // Ensure correct file name

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <ContentBundles/>
      <Footer />
    </div>
  );
}
