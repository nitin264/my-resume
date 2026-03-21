import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { experience } from '../data';

/* ── Floating keyframes injected once ── */
const floatStyles = `
@keyframes floatExp {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-5px); }
}
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(99,102,241,0.4), 0 0 12px rgba(99,102,241,0.3); }
  50%       { box-shadow: 0 0 0 4px rgba(99,102,241,0.1), 0 0 24px rgba(99,102,241,0.5); }
}
@keyframes lineGrow {
  from { scaleY: 0; }
  to   { scaleY: 1; }
}
`;

/* ── Per-card accent config (cycling) ── */
const accentCycle = [
  { accent: '#818cf8', glow: 'rgba(99,102,241,0.15)', border: 'rgba(99,102,241,0.22)', bg: 'rgba(99,102,241,0.06)' },
  { accent: '#a78bfa', glow: 'rgba(139,92,246,0.15)', border: 'rgba(139,92,246,0.22)', bg: 'rgba(139,92,246,0.06)' },
  { accent: '#38bdf8', glow: 'rgba(56,189,248,0.12)', border: 'rgba(56,189,248,0.2)', bg: 'rgba(56,189,248,0.05)' },
];

/* ── Framer variants ── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const cardRight = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const nodeVariant = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'backOut' } },
};

/* ── Highlights: detect metrics / big wins ── */
function parseHighlight(text) {
  const metricRe = /\d+[\+%k]?/;
  if (metricRe.test(text)) return 'metric';
  const keywords = ['automation', 'mentor', 'deploy', 'optimiz', 'architect', 'integrat', 'led', 'built', 'implement'];
  if (keywords.some(k => text.toLowerCase().includes(k))) return 'key';
  return 'normal';
}

/* ── Responsibility bullet ── */
function Bullet({ text, accent }) {
  const kind = parseHighlight(text);
  return (
    <motion.li
      whileHover={{ x: 4 }}
      transition={{ duration: 0.18 }}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.65rem',
        fontSize: '0.9rem',
        lineHeight: 1.75,
        color: kind === 'normal' ? 'rgba(148,163,184,0.9)' : '#e2e8f0',
        cursor: 'default',
        padding: '0.1rem 0',
      }}
    >
      {/* dot */}
      <span
        style={{
          marginTop: '0.55rem',
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: kind === 'metric' ? '#fbbf24' : accent,
          flexShrink: 0,
          boxShadow: kind === 'metric'
            ? '0 0 6px rgba(251,191,36,0.6)'
            : `0 0 6px ${accent}80`,
        }}
      />
      <span>
        {kind === 'metric' ? (
          /* Highlight numbers in amber */
          <span dangerouslySetInnerHTML={{
            __html: text.replace(
              /(\d+[\+%k]?)/g,
              '<strong style="color:#fbbf24;font-weight:700">$1</strong>'
            ),
          }} />
        ) : text}
      </span>
    </motion.li>
  );
}

/* ── Main card ── */
function ExperienceCard({ item, side, cfg, index }) {
  const isLeft = side === 'left';

  return (
    <motion.div
      variants={isLeft ? cardLeft : cardRight}
      className="exp-card-float"
      whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.3, ease: 'easeOut' } }}
      style={{
        position: 'relative',
        borderRadius: '22px',
        padding: '2rem 2.2rem',
        background: 'rgba(255,255,255,0.032)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${cfg.border}`,
        boxShadow: `
          0 0 0 1px ${cfg.border},
          0 12px 40px rgba(0,0,0,0.38),
          0 4px 12px rgba(0,0,0,0.2),
          inset 0 1px 0 rgba(255,255,255,0.06)
        `,
        animation: `floatExp ${7 + index}s ease-in-out ${index * 0.6}s infinite`,
        cursor: 'default',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* Top edge glow line */}
      <div style={{
        position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px',
        background: `linear-gradient(90deg, transparent, ${cfg.accent}70, transparent)`,
      }} />

      {/* Card corner glow */}
      <div style={{
        position: 'absolute',
        top: isLeft ? '-40px' : 'auto',
        bottom: isLeft ? 'auto' : '-40px',
        right: isLeft ? '-30px' : 'auto',
        left: isLeft ? 'auto' : '-30px',
        width: 160, height: 160,
        borderRadius: '50%',
        background: cfg.glow,
        filter: 'blur(50px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Date badge */}
        <span style={{
          display: 'inline-block',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.68rem',
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: cfg.accent,
          opacity: 0.85,
          background: cfg.bg,
          border: `1px solid ${cfg.border}`,
          borderRadius: '6px',
          padding: '0.25rem 0.65rem',
          marginBottom: '1rem',
        }}>
          {item.dateRange ?? item.date}
        </span>

        {/* Company name — gradient */}
        {item.type === 'milestone' ? (
          <h3 style={{
            fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
            fontWeight: 800,
            background: `linear-gradient(135deg, #f1f5f9 0%, ${cfg.accent} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '0.5rem',
            letterSpacing: '-0.01em',
          }}>{item.title}</h3>
        ) : (
          <>
            <h3 style={{
              fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
              fontWeight: 800,
              background: `linear-gradient(135deg, #f1f5f9 20%, ${cfg.accent} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.25rem',
              letterSpacing: '-0.01em',
            }}>{item.title}</h3>

            {/* Divider */}
            <div style={{
              margin: '1.1rem 0',
              height: '1px',
              background: `linear-gradient(90deg, ${cfg.border}, transparent)`,
            }} />

            {/* Responsibilities */}
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {item.responsibilities.map((r, ri) => (
                <Bullet key={ri} text={r} accent={cfg.accent} />
              ))}
            </ul>
          </>
        )}
      </div>
    </motion.div>
  );
}

/* ── Timeline node ── */
function TimelineNode({ cfg }) {
  return (
    <motion.div
      variants={nodeVariant}
      style={{
        width: 16, height: 16,
        borderRadius: '50%',
        background: cfg.accent,
        flexShrink: 0,
        animation: 'pulseGlow 3s ease-in-out infinite',
        zIndex: 10,
        position: 'relative',
      }}
    >
      {/* inner bright core */}
      <div style={{
        position: 'absolute', inset: 3,
        borderRadius: '50%',
        background: '#fff',
        opacity: 0.7,
      }} />
    </motion.div>
  );
}

/* ── Main section ── */
export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { theme } = useTheme();

  /* Separate milestone from roles for alternating layout */
  const roles = experience.filter(e => e.type !== 'milestone');
  const milestone = experience.find(e => e.type === 'milestone');

  return (
    <section id="experience" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <style>{floatStyles}</style>

      {/* ── Background depth blobs ── */}
      {theme === 'dark' && (
        <>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(139,92,246,0.07) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />
          <div className="glow-blob" style={{ width: 500, height: 400, top: '10%', left: '-120px', background: '#6366f1', opacity: 0.06, filter: 'blur(120px)' }} />
          <div className="glow-blob" style={{ width: 380, height: 340, bottom: '5%', right: '-80px', background: '#8b5cf6', opacity: 0.07, filter: 'blur(100px)' }} />
          <div className="glow-blob" style={{ width: 280, height: 240, top: '55%', left: '45%', background: '#38bdf8', opacity: 0.045, filter: 'blur(110px)' }} />
        </>
      )}

      {/* ── Content ── */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* ── Section header ── */}
          <div style={{ marginBottom: '5rem' }}>
            <p className="label" style={{ marginBottom: '1rem' }}>Career</p>
            <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p style={{ marginTop: '1rem', color: 'var(--muted)', fontSize: '1rem', maxWidth: 480 }}>
              My professional journey and the impact I've made.
            </p>
          </div>

          {/* ── Timeline ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="hidden md:block" style={{ position: 'relative' }}>

              {/* Glowing spine */}
              <div style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                top: 0,
                bottom: 0,
                width: 2,
                background: 'linear-gradient(to bottom, rgba(99,102,241,0.6) 0%, rgba(139,92,246,0.5) 50%, rgba(56,189,248,0.3) 85%, transparent 100%)',
                boxShadow: '0 0 12px rgba(99,102,241,0.35), 0 0 32px rgba(99,102,241,0.15)',
                zIndex: 2,
              }} />

              {/* ── Milestone pinned to top of spine ── */}
              {milestone && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '4rem', position: 'relative', zIndex: 5 }}>
                  <motion.div
                    variants={nodeVariant}
                    style={{
                      padding: '0.5rem 1.4rem',
                      borderRadius: '9999px',
                      background: 'rgba(99,102,241,0.12)',
                      border: '1px solid rgba(99,102,241,0.3)',
                      color: '#818cf8',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      boxShadow: '0 0 20px rgba(99,102,241,0.25)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    {milestone.date} — {milestone.title}
                  </motion.div>
                </div>
              )}

              {/* ── Alternating role cards ── */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
                {roles.map((item, i) => {
                  const isLeft = i % 2 === 0;
                  const cfg = accentCycle[i % accentCycle.length];
                  return (
                    <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 56px 1fr', alignItems: 'center', gap: '0' }}>

                      {/* Left slot */}
                      <div style={{ paddingRight: '2.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                        {isLeft && <div style={{ maxWidth: 440, width: '100%' }}>
                          <ExperienceCard item={item} side="left" cfg={cfg} index={i} />
                        </div>}
                      </div>

                      {/* Centre node */}
                      <div style={{ display: 'flex', justifyContent: 'center', zIndex: 5, position: 'relative' }}>
                        <TimelineNode cfg={cfg} />
                      </div>

                      {/* Right slot */}
                      <div style={{ paddingLeft: '2.5rem' }}>
                        {!isLeft && <div style={{ maxWidth: 440 }}>
                          <ExperienceCard item={item} side="right" cfg={cfg} index={i} />
                        </div>}
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>

            {/* ────────────── MOBILE: single column ────────────── */}
            <div className="md:hidden" style={{ position: 'relative' }}>

              {/* Left-aligned spine */}
              <div style={{
                position: 'absolute', left: 7, top: 0, bottom: 0, width: 2,
                background: 'linear-gradient(to bottom, rgba(99,102,241,0.5), rgba(139,92,246,0.3) 70%, transparent)',
                boxShadow: '0 0 8px rgba(99,102,241,0.3)',
                zIndex: 1,
              }} />

              {/* Milestone pill (mobile) */}
              {milestone && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', paddingLeft: 32 }}>
                  <motion.div variants={nodeVariant} style={{
                    padding: '0.4rem 1rem',
                    borderRadius: '9999px',
                    background: 'rgba(99,102,241,0.12)',
                    border: '1px solid rgba(99,102,241,0.3)',
                    color: '#818cf8',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}>
                      {milestone.date} — {milestone.title}
                  </motion.div>
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {roles.map((item, i) => {
                  const cfg = accentCycle[i % accentCycle.length];
                  return (
                    <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                      {/* Node */}
                      <div style={{ marginTop: '1.6rem', zIndex: 5, position: 'relative' }}>
                        <TimelineNode cfg={cfg} />
                      </div>
                      {/* Card */}
                      <div style={{ flex: 1 }}>
                        <ExperienceCard item={item} side="right" cfg={cfg} index={i} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
