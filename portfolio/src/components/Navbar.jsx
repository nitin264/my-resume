import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { navLinks, hero } from '../data';
import Button from './Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          ? 'backdrop-blur-xl bg-black/40 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1080px] mx-auto px-8 flex items-center justify-between h-20">

        {/* Desktop nav — centered via flex-1 trick */}
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

        {/* CTA — right side */}
        <div className="hidden md:flex items-center">
          <Button
            variant="primary"
            href={`mailto:${hero.email}`}
            className="px-6 py-2"
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto text-slate-400 hover:text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden backdrop-blur-xl bg-black/60 border-t border-white/5"
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
