import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data';

const categoryColor = {
  code:     'bg-indigo-500/10 border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/20',
  layers:   'bg-violet-500/10 border-violet-500/20 text-violet-300 hover:bg-violet-500/20',
  database: 'bg-sky-500/10 border-sky-500/20 text-sky-300 hover:bg-sky-500/20',
  package:  'bg-amber-500/10 border-amber-500/20 text-amber-300 hover:bg-amber-500/20',
  tool:     'bg-emerald-500/10 border-emerald-500/20 text-emerald-300 hover:bg-emerald-500/20',
};

const categoryDot = {
  code:     'bg-indigo-400',
  layers:   'bg-violet-400',
  database: 'bg-sky-400',
  package:  'bg-amber-400',
  tool:     'bg-emerald-400',
};

const categoryMarkerColor = {
  code:     '#818cf8',
  layers:   '#a78bfa',
  database: '#38bdf8',
  package:  '#fbbf24',
  tool:     '#34d399',
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section" style={{ background: 'rgba(99,102,241,0.015)' }}>
      {/* Subtle glow */}
      <div
        className="glow-blob w-[500px] h-[400px] top-1/2 right-0 opacity-[0.04]"
        style={{ background: '#8b5cf6', transform: 'translateY(-50%)' }}
      />

      {/* Wider container */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Header */}
          <div className="mb-16">
            <p className="label mb-4">Tech Stack</p>
            <h2
              className="font-black tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}
            >
              Skills &amp; <span className="gradient-text">Technologies</span>
            </h2>
          </div>

          {/* 2-column grid — wider gaps, more padding */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-x-14 gap-y-16">
            {skills.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: gi * 0.08 }}
                className="min-w-0"
              >
                {/* Category label */}
                <div className="flex items-center gap-1 mb-9">
                  <span className={`w-2.5 h-0.5 rounded-full flex-shrink-0 ${categoryDot[group.icon]}`} />
                  <span className="text-xxl font-mono uppercase tracking-widest text-slate-500">
                    {group.category}
                  </span>
                </div>

                {/* Unordered list — bullet color matches category */}
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-200">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="pl-2 marker:text-[var(--marker)]"
                      style={{ '--marker': categoryMarkerColor[group.icon] }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
