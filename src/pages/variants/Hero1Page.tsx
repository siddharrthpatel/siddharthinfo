import Layout from "@/components/Layout";
import FloatingNav from "@/components/FloatingNav";
import Hero1 from "@/components/sections/hero-variants/Hero1";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import WorkSection from "@/components/sections/WorkSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Hero1Page() {
  return (
    <Layout>
      <FloatingNav />
      <Hero1 />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ProjectsSection />
      <EducationSection />
      <CertificatesSection />
      <ContactSection />
    </Layout>
  );
}
