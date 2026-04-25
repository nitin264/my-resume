import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { contact } from '../data';

function MailIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 7.75A1.75 1.75 0 0 1 5.75 6h12.5A1.75 1.75 0 0 1 20 7.75v8.5A1.75 1.75 0 0 1 18.25 18H5.75A1.75 1.75 0 0 1 4 16.25v-8.5Z"
        className="fill-current"
        opacity="0.18"
      />
      <path
        d="m5.5 8 5.47 4.1a1.75 1.75 0 0 0 2.06 0L18.5 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.9 7.6 12 12.82 19.1 7.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4.25" y="4.25" width="15.5" height="15.5" rx="3.5" className="fill-current" opacity="0.14" />
      <path
        d="M9 10.25V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 8.35a.85.85 0 1 0 0 1.7.85.85 0 0 0 0-1.7Z"
        className="fill-current"
      />
      <path
        d="M12.5 16v-3.3c0-1.18.68-2.03 1.77-2.03 1.08 0 1.73.75 1.73 2.03V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 10.25v.97"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowRightIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 12h14"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m13 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Contact() {
  const { theme } = useTheme();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const isLight = theme === 'light';
  const linkedinHandle = contact.linkedin
    .replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, '')
    .replace(/\/$/, '');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
    window.setTimeout(() => setSent(false), 3000);
  };

  const sectionText = isLight ? 'text-slate-950' : 'text-white';
  const labelText = isLight ? 'text-indigo-700/80' : 'text-indigo-400/90';
  const introText = isLight ? 'text-slate-600' : 'text-slate-400/85';
  const dividerColor = isLight ? 'bg-slate-900/10' : 'bg-white/5';
  const itemBorder = isLight ? 'border-slate-900/10' : 'border-white/10';
  const cardClass = isLight
    ? 'bg-white/80 border border-slate-900/10 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl'
    : 'bg-white/5 border border-white/10 shadow-[0_24px_80px_rgba(3,2,20,0.42)] backdrop-blur-xl';
  const fieldClass = isLight
    ? 'w-full rounded-lg border border-slate-900/10 bg-white px-4 py-4 text-sm text-slate-950 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/10'
    : 'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-sm text-white placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20';
  const formLabelClass = isLight
    ? 'mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-slate-500'
    : 'mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-slate-400';

  const contactItems = [
    {
      label: 'EMAIL',
      value: contact.email,
      href: `mailto:${contact.email}`,
      external: false,
      iconBoxClass: isLight
        ? 'bg-indigo-100 shadow-[inset_0_0_0_1px_rgba(79,70,229,0.12)]'
        : 'bg-[#23123d] shadow-[inset_0_0_0_1px_rgba(167,139,250,0.12)]',
      iconClass: isLight ? 'h-7 w-7 text-indigo-600' : 'h-7 w-7 text-violet-300',
      icon: MailIcon,
    },
    {
      label: 'LINKEDIN',
      value: linkedinHandle,
      href: contact.linkedin,
      external: true,
      iconBoxClass: isLight
        ? 'bg-sky-100 shadow-[inset_0_0_0_1px_rgba(2,132,199,0.12)]'
        : 'bg-[#0f1b36] shadow-[inset_0_0_0_1px_rgba(96,165,250,0.12)]',
      iconClass: isLight ? 'h-7 w-7 text-sky-600' : 'h-7 w-7 text-sky-400',
      icon: LinkedInIcon,
    },
  ];

  return (
  <section id="contact" className={`relative pt-48 pb-28 ${sectionText}`}>
    {/* Background glow */}
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-64 ${
        isLight
          ? 'bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_70%)]'
          : 'bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.22),transparent_70%)]'
      }`}
    />

    <div className="relative mx-auto max-w-6xl">
      {/* HEADER */}
      <div className="mx-auto max-w-6xl text-center md:text-left">
        <p className={`text-sm font-semibold uppercase tracking-[0.5em] ${labelText}`}>
          CONTACT
        </p>

        <h2 className="mt-8 text-4xl font-black leading-[1.1] tracking-[-0.05em] sm:text-5xl md:text-6xl mx-auto md:mx-0 text-center md:text-left">
          Let&apos;s <span className="gradient-text">work together</span>
        </h2>

        <p className={`mt-6 max-w-2xl text-lg leading-[1.7] ${introText} mx-auto text-center md:mx-0 md:text-left` }>
          Open to backend engineering roles, consulting, and interesting problems.
        </p>
      </div>

      {/* GRID */}
      <div className="relative mt-16">
        {/* Divider */}
        <div className={`absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 md:block ${dividerColor}`} />

        <div className="w-full grid gap-20 md:grid-cols-2 md:items-start">

          {/* LEFT */}
          <div className="md:pr-12 w-full">
            <p className={`max-w-lg text-[1rem] leading-[1.8] ${introText}`}>
              Prefer direct contact? Reach out via email or connect on LinkedIn. I usually respond within 24 hours.
            </p>

            <div className="space-y-8">
              {contactItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                    className={`group flex items-center justify-between ${
                      index < contactItems.length - 1 ? `border-b pb-8 ${itemBorder}` : ''
                    }`}
                  >
                    <div className="flex items-center gap-5">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.iconBoxClass}`}>
                        <Icon className={item.iconClass} />
                      </div>

                      <div>
                        <p className={`text-xs uppercase tracking-[0.18em] ${labelText}`}>
                          {item.label}
                        </p>
                        <p className={`mt-1 text-[1rem] font-semibold ${sectionText}`}>
                          {item.value}
                        </p>
                      </div>
                    </div>

                    <ArrowRightIcon className="h-5 w-5 opacity-60 group-hover:translate-x-1 transition" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:pl-12 w-full">
            <form onSubmit={handleSubmit} className={`rounded-xl p-6 md:p-8 ${cardClass}`}>
              <div className="space-y-6">
                <div>
                  <label className={formLabelClass}>NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className={formLabelClass}>EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className={formLabelClass}>MESSAGE</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your opportunity..."
                    className={`${fieldClass} min-h-[140px] resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition"
                >
                  <span>{sent ? 'Message Sent' : 'Send Message'}</span>
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  </section>
);
}
