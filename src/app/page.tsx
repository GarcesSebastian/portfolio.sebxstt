import Contact from "@/components/server/Contact";
import Experience from "@/components/server/Experience";
import Hero from "@/components/server/Hero";
import Projects from "@/components/server/Projects";
import Services from "@/components/server/Services";
import Skills from "@/components/server/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Services />
      <Contact />
    </main>
  );
}
