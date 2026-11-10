import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import Education from "@/components/sections/education/Education";
import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/project/Projects";
import Skills from "@/components/sections/skill/Skills";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Projects />
      <About />
      <div className="site-shell background-grid">
        <Skills />
        <Education />
      </div>
      <Contact />
    </main>
  );
}
