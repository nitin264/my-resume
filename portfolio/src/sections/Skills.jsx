import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { skills } from '../data';

/* ── Per-category visual config ── */
const categoryConfig = {
  code: {
    accent: '#818cf8',          // indigo
    glow: 'rgba(99,102,241,0.18)',
    border: 'rgba(99,102,241,0.22)',
    bg: 'rgba(99,102,241,0.07)',
    badge: 'rgba(99,102,241,0.12)',
    badgeBorder: 'rgba(99,102,241,0.25)',
    badgeText: '#a5b4fc',
    icon: '{ }',
  },
  layers: {
    accent: '#a78bfa',          // violet
    glow: 'rgba(139,92,246,0.18)',
    border: 'rgba(139,92,246,0.22)',
    bg: 'rgba(139,92,246,0.07)',
    badge: 'rgba(139,92,246,0.12)',
    badgeBorder: 'rgba(139,92,246,0.25)',
    badgeText: '#c4b5fd',
    icon: '⬡',
  },
  database: {
    accent: '#38bdf8',          // sky
    glow: 'rgba(56,189,248,0.15)',
    border: 'rgba(56,189,248,0.2)',
    bg: 'rgba(56,189,248,0.06)',
    badge: 'rgba(56,189,248,0.1)',
    badgeBorder: 'rgba(56,189,248,0.22)',
    badgeText: '#7dd3fc',
    icon: '◈',
  },
  package: {
    accent: '#fbbf24',          // amber
    glow: 'rgba(251,191,36,0.14)',
    border: 'rgba(251,191,36,0.2)',
    bg: 'rgba(251,191,36,0.06)',
    badge: 'rgba(251,191,36,0.1)',
    badgeBorder: 'rgba(251,191,36,0.22)',
    badgeText: '#fde68a',
    icon: '◻',
  },
  tool: {
    accent: '#34d399',          // emerald
    glow: 'rgba(52,211,153,0.14)',
    border: 'rgba(52,211,153,0.2)',
    bg: 'rgba(52,211,153,0.06)',
    badge: 'rgba(52,211,153,0.1)',
    badgeBorder: 'rgba(52,211,153,0.22)',
    badgeText: '#6ee7b7',
    icon: '⌘',
  },
};

/* ── Framer variants ── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Floating keyframe (CSS-driven via style tag) ── */
const floatStyles = `
@keyframes floatCard {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(6px); }
}
.skills-card-float:nth-child(1) { animation: ease-in-out infinite; }
.skills-card-float:nth-child(2) { animation: ease-in-out 1s infinite; }
.skills-card-float:nth-child(3) { animation: ease-in-out 0.5s infinite; }
.skills-card-float:nth-child(4) { animation: ease-in-out 0.5s infinite; }
.skills-card-float:nth-child(5) { animation: ease-in-out 0.8s infinite; }
`;

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '80px' });
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      className="section"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Inject float keyframes */}
      <style>{floatStyles}</style>

      {/* ── Deep radial gradient background ── */}
      {theme === 'dark' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99,102,241,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* ── Blob 1 — top-left violet ── */}
      {theme === 'dark' && (
        <div
          className="glow-blob"
          style={{
            width: 480,
            height: 380,
            top: '-80px',
            left: '-100px',
            background: '#7c3aed',
            opacity: 0.07,
            filter: 'blur(110px)',
          }}
        />
      )}

      {/* ── Blob 2 — bottom-right indigo ── */}
      {theme === 'dark' && (
        <div
          className="glow-blob"
          style={{
            width: 420,
            height: 340,
            bottom: '-60px',
            right: '-80px',
            background: '#4f46e5',
            opacity: 0.08,
            filter: 'blur(100px)',
          }}
        />
      )}

      {/* ── Blob 3 — center sky ── */}
      {theme === 'dark' && (
        <div
          className="glow-blob"
          style={{
            width: 300,
            height: 260,
            top: '40%',
            left: '55%',
            background: '#0ea5e9',
            opacity: 0.05,
            filter: 'blur(120px)',
          }}
        />
      )}

      {/* ── Content ── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* ── Header ── */}
          <motion.div
            variants={cardVariants}
            className="mb-28"
            style={{ textAlign: 'center' }}
          >
            <p className="label mb-4">Tech Stack</p>
            <h2
              className="font-black tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)' }}
            >
              Skills &amp;{' '}
              <span className="gradient-text">Technologies</span>
            </h2>
            <p style={{ marginBottom: '2.5rem', color: 'var(--muted)', fontSize: '20px', maxWidth: 780, margin: '1rem auto 0' }}>
              Tools, languages, and frameworks I use to build reliable backend systems.
            </p>
          </motion.div>

          {/* ── Cards grid ── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '2.5rem',
              alignItems: 'start',
            }}
          >
            {skills.map((group, gi) => {
              const cfg = categoryConfig[group.icon] ?? categoryConfig.code;
              return (
                <motion.div
                  key={group.category}
                  variants={cardVariants}
                  className="skills-card-float"
                  style={{
                    /* Glassmorphism card */
                    position: 'relative',
                    borderRadius: '20px',
                    padding: '2rem',
                    background: `rgba(255,255,255,0.035)`,
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: `1px solid ${cfg.border}`,
                    boxShadow: `
                      0 0 0 1px ${cfg.border},
                      0 8px 32px rgba(0,0,0,0.35),
                      0 2px 8px rgba(0,0,0,0.2),
                      inset 0 1px 0 rgba(255,255,255,0.06)
                    `,
                    transition: 'box-shadow 0.35s ease, transform 0.35s ease, background 0.35s ease',
                    cursor: 'default',
                    zIndex: 2,
                    /* float animation — CSS via class above */
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.025,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                >
                  {/* Inner glow top-edge highlight */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '20%',
                      right: '20%',
                      height: '1px',
                      background: `linear-gradient(90deg, transparent, ${cfg.accent}60, transparent)`,
                      borderRadius: '0 0 4px 4px',
                    }}
                  />

                  {/* Card corner glow */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-30px',
                      right: '-20px',
                      width: 140,
                      height: 140,
                      borderRadius: '50%',
                      background: cfg.glow,
                      filter: 'blur(40px)',
                      pointerEvents: 'none',
                      zIndex: 0,
                    }}
                  />

                  {/* Category header */}
                  <div style={{ position: 'relative', zIndex: 1, marginBottom: '1.5rem' }}>
                    {/* Accent icon badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '2.2rem',
                          height: '2.2rem',
                          borderRadius: '10px',
                          background: cfg.bg,
                          border: `1px solid ${cfg.border}`,
                          color: cfg.accent,
                          fontSize: '1rem',
                          fontFamily: 'JetBrains Mono, monospace',
                          flexShrink: 0,
                        }}
                      >
                        {cfg.icon}
                      </span>
                      <span
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          letterSpacing: '0.22em',
                          textTransform: 'uppercase',
                          color: cfg.accent,
                          opacity: 0.9,
                        }}
                      >
                        {group.category}
                      </span>
                    </div>

                    {/* Divider */}
                    <div
                      style={{
                        marginTop: '1.1rem',
                        height: '1px',
                        background: `linear-gradient(90deg, ${cfg.border}, transparent)`,
                      }}
                    />
                  </div>

                  {/* Skill pills */}
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}
                  >
                    {group.items.map((item) => (
                      <SkillPill key={item} item={item} cfg={cfg} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Skill pill with hover state ── */
function SkillPill({ item, cfg }) {
  return (
    <motion.span
      whileHover={{ scale: 1.06, y: -2 }}
      transition={{ duration: 0.18 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.32rem 0.85rem',
        borderRadius: '9999px',
        fontSize: '0.8rem',
        fontWeight: 500,
        background: cfg.badge,
        border: `1px solid ${cfg.badgeBorder}`,
        color: cfg.badgeText,
        cursor: 'default',
        letterSpacing: '0.01em',
        transition: 'background 0.2s ease, box-shadow 0.2s ease',
        boxShadow: `0 2px 8px rgba(0,0,0,0.18)`,
      }}
    >
      {item}
    </motion.span>
  );
}
