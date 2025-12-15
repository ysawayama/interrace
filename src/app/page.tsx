import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CaseStudySection from "@/components/sections/CaseStudySection";
import NewsSection from "@/components/sections/NewsSection";
import MembersSection from "@/components/sections/MembersSection";
import RecruitSection from "@/components/sections/RecruitSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <CaseStudySection />
        <NewsSection />
        <MembersSection />
        <RecruitSection />
      </main>
      <Footer />
    </>
  );
}
