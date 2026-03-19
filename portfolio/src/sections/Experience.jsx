import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../data';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="section py-32">
      <div className="container mx-auto px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Header */}
          <div className="flex flex-col space-y-4 mb-40">
            <p className="label mb-4">Career</p>
            <h2
              className="font-black tracking-tight leading-[1.3]"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}
            >
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              My professional journey and the projects I've contributed to.
            </p>
          </div>

          {/* Timeline Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative"
          >
            {/* Timeline line — positioned absolutely */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/20 via-indigo-500/5 to-transparent" />

            {/* Timeline items */}
            <div className="space-y-20 md:space-y-28">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative pl-16 md:pl-20 ${index !== 0 ? 'mt-10 md:mt-14' : ''}`}
                >

                  {/* Content */}
                  {item.type === 'milestone' ? (
                    /* Milestone card */
                    <motion.div
                      className="group py-6 md:py-8"
                      whileHover={{ y: -3 }}
                    >
                        {/* Divider between items */}
                        {index !== 0 && (
                          <div className="absolute -top-6 left-16 md:left-20 w-[80%] h-px bg-white/5" />
                        )}  
                      <div className="space-y-6 md:space-y-3">
                        <p className="text-xs md:text-lg font-mono text-indigo-400/60 tracking-wider uppercase">
                          {item.date}
                        </p>
                        <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                          {item.title}
                        </h4>
                      </div>
                    </motion.div>
                  ) : (
                    /* Project card with responsibilities */
                    <motion.div
                      className="group py-6 md:py-8"
                      whileHover={{ y: -3 }}
                    >
                      <div className="flex flex-col space-y-6">
                        {/* Header */}
                        <div className="flex flex-col space-y-2">
                          <p className="text-xs md:text-lg font-mono text-indigo-400/60 text-sm md:text-basetracking-wider uppercase">
                            {item.dateRange}
                          </p>
                          <h4 className="text-2xl md:text-3xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                            {item.title}
                          </h4>
                        </div>

                        {/* Responsibilities */}
                        <ul className="space-y-5 mt-4">
                          {item.responsibilities.map((responsibility, ri) => (
                            <li
                              key={ri}
                              className="flex items-center gap-2 text-slate-400 text-[15px] leading-[1.85]"
                            >
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500/70 flex-shrink-0" />
                              <span className="max-w-lg">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
