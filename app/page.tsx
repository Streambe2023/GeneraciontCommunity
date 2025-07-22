import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProgramsSection from "@/components/programs-section"
import ImpactSection from "@/components/impact-section"
import JoinSection from "@/components/join-section"
import TeamSection from "@/components/team-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1 pt-16">
        {" "}
        {/* Add padding-top to account for fixed header */}
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <ImpactSection />
        <JoinSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
