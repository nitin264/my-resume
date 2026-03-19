import './index.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#0a0a0f' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Gradient fade overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Footer */}
      <Footer />

      <Analytics />
    </div>
  );
}
