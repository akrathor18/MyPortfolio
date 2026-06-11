import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Journey from '../components/Journey';

// JSON-LD structured data — helps Google understand who you are
// and can trigger a Knowledge Panel in search results
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ashish Kumar',
  url: 'https://ashish-codes.web.app',
  image: 'https://ashish-codes.web.app/og-image.png',
  jobTitle: 'Full Stack Developer',
  description:
    'Full Stack Developer from Chandigarh specializing in MERN stack, Next.js, and real-time systems. Final-year Diploma in CS & Engineering graduate.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chandigarh',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://github.com/akrathor18',
    'https://www.linkedin.com/in/ashishkumartech',
    'https://x.com/iam_ashish_dev',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'PostgreSQL',
    'Socket.IO',
    'Full Stack Development',
    'REST APIs',
    'JavaScript',
    'TypeScript',
  ],
};

export default function Home() {
  return (
    <>
      {/* Inject JSON-LD into the page <head> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-background text-foreground">
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        {/* <section id="journey">
          <Journey />
        </section> */}
        <Projects />
        <Contact />
      </main>
    </>
  );
}
