import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";
import { DatalinesWithGrid } from "@/components/neonblade-ui/datalines-with-grid";

export default function Home() {
  return (
    <LoadingScreen>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      {/* <DatalinesWithGrid
        lineColor="#54EAFD"
        shadowColor="#54EAFD"
        overlay={false}
      /> */}
    </LoadingScreen>
  );
}
