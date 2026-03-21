import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { navLinks, hero } from '../data';
import Button from './Button';
import { useTheme } from '../context/ThemeContext';

/* ── Sun icon ── */
function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

/* ── Moon icon ── */
function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

/* ── Theme toggle button ── */
function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '2.25rem',
        height: '2.25rem',
        borderRadius: '10px',
        border: '1px solid var(--border)',
        background: 'var(--subtle)',
        color: isDark ? '#a5b4fc' : '#6366f1',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxShadow: isDark
          ? '0 0 12px rgba(99,102,241,0.12)'
          : '0 0 12px rgba(99,102,241,0.08)',
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -30, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0,   opacity: 1, scale: 1   }}
          exit={{    rotate:  30, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.22, ease: 'easeInOut' }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {isDark ? <MoonIcon /> : <SunIcon />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? theme === 'dark'
            ? 'backdrop-blur-xl bg-black/40 border-b border-white/5'
            : 'backdrop-blur-xl bg-white/40 border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1080px] mx-auto px-8 flex items-center justify-between h-20">

        {/* Desktop nav — centered */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-12">
          {navLinks.map((l) => (
            <motion.a
              key={l.label}
              href={l.href}
              onClick={(e) => { e.preventDefault(); go(l.href); }}
              className="text-slate-500 hover:text-slate-200 text-sm tracking-wide transition-colors duration-200"
              whileHover={{ y: -1 }}
            >
              {l.label}
            </motion.a>
          ))}
        </div>

        {/* Right side — toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button
            variant="primary"
            href={`mailto:${hero.email}`}
            className="px-6 py-2"
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile — toggle + hamburger */}
        <div className="md:hidden ml-auto flex items-center gap-3">
          <ThemeToggle />
          <button
            className="text-slate-400 hover:text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden overflow-hidden backdrop-blur-xl ${
              theme === 'dark'
                ? 'bg-black/60 border-t border-white/5'
                : 'bg-white/40 border-t border-gray-200'
            }`}
          >
            <nav className="max-w-[1080px] mx-auto px-8 py-6 flex flex-col gap-5">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); go(l.href); }}
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-2">
                <Button
                  variant="primary"
                  href={`mailto:${hero.email}`}
                  className="w-full justify-center px-6 py-2"
                >
                  Hire Me
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
