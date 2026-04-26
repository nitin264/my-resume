import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import Button from '../components/Button';
import { hero } from '../data';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="glow-blob w-[600px] h-[600px] top-[-10%] left-[-10%] opacity-[0.07]"
        style={{ background: '#6366f1' }} />
      <div className="glow-blob w-[500px] h-[500px] bottom-[-15%] right-[-5%] opacity-[0.05]"
        style={{ background: '#8b5cf6' }} />

      <div className="container mx-auto px-8 relative z-10 pt-24">
        <div className="max-w-4xl flex flex-col gap-8">

          {/* Availability badge — larger */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 text-sm text-contrast-badge font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="font-black tracking-tight leading-[1.05]"
            style={{ fontSize: 'clamp(3.2rem, 9vw, 7rem)' }}
          >
            <span className="text-color: rgba(0, 0, 0, 0.84);">Sai Nitin</span>
            <br />
            <span className="gradient-text">Bogavarapu</span>
          </motion.h1>

          {/* Subtitle — sits below name with its own spacing via gap-8 */}
          <motion.div
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="flex items-center gap-4"
          >
            <div className="w-10 h-px bg-indigo-500/50" />
            <p className="text-contrast-secondary font-mono text-base tracking-wider">
              Software Engineer · Python Backend Developer
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="text-contrast-secondary text-xl leading-relaxed max-w-2xl font-light"
          >
            {hero.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-wrap gap-4 pt-2"
          >
            <Button
              variant="primary"
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              icon={FaArrowRight}
              iconProps={{ className: 'group-hover:translate-x-0.5 transition-transform text-blue-500' }}
            >
              <span class="text-indigo-600">View Projects</span>
            </Button>

            <Button
              variant="secondary"
              href={hero.linkedin}
              target="_blank" rel="noopener noreferrer"
              icon={FaLinkedin}
              iconProps={{ className: 'text-blue-500' }}
            >
              <span class="text-indigo-600">LinkedIn</span>
            </Button>

            <Button
              variant="secondary"
              href={`mailto:${hero.email}`}
              icon={FaEnvelope}
              iconProps={{ className: 'text-indigo-500' }}
            >
              <span class="text-indigo-600">Email</span>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade — only in dark mode */}
      {theme === 'dark' && (
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #050507, transparent)' }} />
      )}
    </section>
  );
}
