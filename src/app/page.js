import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Journey from '../components/Journey';
export default function Home() {
  return (
    <main className="bg-background text-foreground">
      
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="journey">
        <Journey />
      </section>
      <Projects />
      <Contact />
      
    </main>
  );
}
