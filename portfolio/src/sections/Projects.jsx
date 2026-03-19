import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../data';

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section" style={{ background: 'rgba(99,102,241,0.015)' }}>
      {/* Ambient glow */}
      <div
        className="glow-blob w-[500px] h-[400px] top-0 left-1/2 opacity-[0.04]"
        style={{ background: '#6366f1', transform: 'translateX(-50%)' }}
      />

      <div className="container mx-auto px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Header */}
          <div className="mb-24">
            <p className="label mb-4">Portfolio</p>
            <h2
              className="font-black tracking-tight leading-[1.3]"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}
            >
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>

          {/* Parent wrapper for uniform spacing */}
          <div className="flex flex-col gap-10">
            {/* First card — full width hero */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.05 }}
              whileHover={{ y: 5, transition: { duration: 0.22, ease: 'easeOut' } }}
              className="project-card group"
            >
              <div className="flex flex-col gap-10 p-10">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{projects[0].icon}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors duration-200">
                    {projects[0].title}
                  </h3>
                </div>
                <p className="text-slate-400 leading-[1.8] max-w-2xl">
                  {projects[0].description}
                </p>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {projects[0].tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Remaining cards — 2-col grid, consistent height */}
            <div className="grid md:grid-cols-2 gap-10 auto-rows-fr">
              {projects.slice(1).map((proj, i) => (
                <motion.div
                  key={proj.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
                  className="project-card group flex flex-col h-full"
                >
                  <div className="flex flex-col gap-5 p-8 flex-1">
                    {/* Icon + title */}
                    <div className="text-3xl">{proj.icon}</div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors duration-200">
                      {proj.title}
                    </h3>

                    {/* Description — flex-grow pushes badges to bottom */}
                    <p className="text-slate-400 text-sm leading-[1.8] flex-grow">
                      {proj.description}
                    </p>

                    {/* Tech badges — always at bottom */}
                    <div className="flex flex-wrap gap-2.5 pt-3">
                      {proj.tech.map((t) => (
                        <span key={t} className="tech-badge">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
