import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { about } from '../data';

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section">
      <div className="container mx-auto px-8">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-20 items-start"
        >
          {/* Left — large headline */}
          <div>
            <motion.p variants={item} className="label mb-5">About</motion.p>
            <motion.h2
              variants={item}
              className="font-black leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)' }}
            >
              Engineering{' '}
              <span className="gradient-text">reliable</span>
              <br />
              backend systems for real-world business workflows
            </motion.h2>

            {/* Stats — floating below heading */}
            <motion.div variants={item} className="flex gap-6 mt-10 mb-12">
              {[
                { value: '3+', label: (
                    <>
                      Years of 
                      <br />
                      Experience
                    </>
                  ) },
                { value: '15+', label: 'Mentored' },
                { value: '2', label: 'Real-World Enterprise Projects' },
              ].map((s, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-black gradient-text">{s.value}</div>
                  <div className="text-xs text-slate-600 mt-1.5 uppercase tracking-widest font-mono">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — body copy */}
          <div className="max-w-xl">
            <motion.p variants={item} className="text-slate-300 text-lg leading-[1.65] mb-6">
              {about.summary}
            </motion.p>
            <motion.p variants={item} className="text-slate-500 text-base leading-[1.65] mb-10">
              I thrive in complex insurance and enterprise environments, collaborating with QA teams,
              business analysts, and stakeholders to deliver production-quality backend code.
            </motion.p>

            {/* Bullet list with increased spacing */}
            <motion.ul variants={item} className="space-y-4 pl-6 mb-10">
              {about.highlights.map((h) => (
                <li key={h} className="text-slate-400 text-base flex items-center gap-3 leading-relaxed">
                  <span className="w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </motion.ul>

            {/* Italic closing — after the list */}
            <motion.p
              variants={item}
              className="text-slate-300 italic text-base leading-relaxed pl-6"
            >
              {about.closing}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
