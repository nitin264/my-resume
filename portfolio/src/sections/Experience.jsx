import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../data';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section">
      <div className="container mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Header */}
          <div className="mb-20">
            <p className="label mb-5" style={{ fontSize: '2.2rem', letterSpacing: '0.22em' }}>
              Career
            </p>
            <h2
              className="font-black tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2.8rem, 5vw, 4.2rem)' }}
            >
              Work <span className="gradient-text">Experience</span>
            </h2>
          </div>

          {experience.map((exp, ei) => (
            <div
              key={ei}
              className="grid lg:grid-cols-[260px_1fr] gap-16 lg:gap-24"
            >
              {/* Left — company info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:sticky top-28 self-start"
              >
                <h3
                  className="font-bold text-white mb-2"
                  style={{ fontSize: '2.2rem' }}
                >
                  {exp.company}
                </h3>
                <p className="text-indigo-300 font-medium text-xl mb-5">{exp.role}</p>
                <p className="text-indigo-300 text-sm font-mono">
                  {exp.duration}
                </p>
              </motion.div>

              {/* Right — projects */}
              <div className="space-y-16">
                {exp.projects.map((proj, pi) => (
                  <motion.div
                    key={pi}
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.2 + pi * 0.14 }}
                  >
                    {/* Project name */}
                    <div className="flex items-center gap-3 mb-7">
                      <span className="w-6 h-px bg-indigo-500/50 flex-shrink-0" />
                      <h4 className="text-white font-semibold text-base tracking-wide">
                        {proj.name}
                      </h4>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-5">
                      {proj.responsibilities.map((resp, ri) => (
                        <li
                        key={ri}
                        className="flex items-start gap-5 text-slate-400 text-base leading-[1.8]"
                      >
                          <span className="mt-[0.6rem] w-1.5 h-1.5 rounded-full bg-indigo-500/50 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
