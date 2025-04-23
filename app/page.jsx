import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import Education from "@/components/sections/education/Education";
import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/project/Projects";
import Skills from "@/components/sections/skill/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-b dark:from-[#0F172A] dark:to-[#1E293B] text-gray-900 dark:text-white">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Education Section */}
      <Education />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
