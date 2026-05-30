
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { contact } from '../data';
import { FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import Button from '../components/Button';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const { theme } = useTheme();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputCls = theme === 'light'
    ? `w-full bg-transparent border-b border-gray-300 py-4 text-gray-900 text-sm
       placeholder-gray-400 transition-colors duration-200 focus:border-indigo-500/60 outline-none`
    : `w-full bg-transparent border-b border-white/10 py-4 text-slate-200 text-sm
       placeholder-slate-600 transition-colors duration-200 focus:border-indigo-500/60 outline-none`;

  return (
    <section id="contact" className="section">
      {theme === 'dark' && (
        <div
          className="glow-blob w-[600px] h-[400px] bottom-0 left-1/2 opacity-[0.04]"
          style={{ background: '#6366f1', transform: 'translateX(-50%)' }}
        />
      )}

      <div className="container mx-2 px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Header — larger heading, more space below */}
          <div className="text-center mb-4">
            <p className="label">Contact</p>
            <h2
              className="font-black tracking-tight leading-tight mb-1"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 4.8rem)' }}
            >
              Let&apos;s <span className="gradient-text">work together</span>
            </h2>
            <p className={`text-lg max-w-md mx-auto leading-relaxed ${
              theme === 'light' ? 'text-gray-600' : 'text-slate-500'
            }`}>
              Open to backend engineering roles, consulting, and interesting problems.
            </p>
          </div>

          {/* Two columns */}
          <div className="grid md:grid-cols-2 gap-20 lg:gap-32 items-start max-w-4xl mx-auto">

            {/* Left — direct links */}
            <div className="space-y-4">
              <p className={`leading-[1.9] mb-4 ${
                theme === 'light' ? 'text-gray-600' : 'text-slate-400'
              }`}>
                Prefer direct contact? Reach out via email or connect on LinkedIn.
                I usually respond within 24 hours.
              </p>

              <motion.a
                href={`mailto:${contact.email}`}
                className={`group flex items-center justify-between py-1 transition-colors duration-200 ${
                  theme === 'light'
                    ? 'border-b border-gray-300 hover:border-indigo-500/30'
                    : 'border-b border-white/6 hover:border-indigo-500/30'
                }`}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-1">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    theme === 'light'
                      ? 'bg-indigo-100'
                      : 'bg-indigo-500/10'
                  }`}>
                    <FaEnvelope className="text-indigo-500" size={15} />
                  </div>
                  <div>
                    <p className={`text-xs uppercase tracking-widest font-mono mb-1 ${
                      theme === 'light' ? 'text-gray-500' : 'text-slate-600'
                    }`}>Email</p>
                    <p className={`text-sm group-hover:text-indigo-500 transition-colors ${
                      theme === 'light'
                        ? 'text-gray-900 group-hover:text-indigo-600'
                        : 'text-slate-300 group-hover:text-indigo-300'
                    }`}>{contact.email}</p>
                  </div>
                </div>
                <FaArrowRight size={12} className={`transition-colors ${
                  theme === 'light'
                    ? 'text-gray-400 group-hover:text-indigo-600'
                    : 'text-slate-600 group-hover:text-indigo-400'
                }`} />
              </motion.a>

              <motion.a
                href={contact.linkedin}
                target="_blank" rel="noopener noreferrer"
                className={`group flex items-center justify-between py-6 transition-colors duration-200 ${
                  theme === 'light'
                    ? 'border-b border-gray-300 hover:border-blue-500/30'
                    : 'border-b border-white/6 hover:border-blue-500/30'
                }`}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    theme === 'light'
                      ? 'bg-blue-100'
                      : 'bg-blue-500/10'
                  }`}>
                    <FaLinkedin className="text-blue-500" size={15} />
                  </div>
                  <div>
                    <p className={`text-xs uppercase tracking-widest font-mono mb-1 ${
                      theme === 'light' ? 'text-gray-500' : 'text-slate-600'
                    }`}>LinkedIn</p>
                    <p className={`text-sm group-hover:text-blue-500 transition-colors ${
                      theme === 'light'
                        ? 'text-gray-900 group-hover:text-blue-600'
                        : 'text-slate-300 group-hover:text-blue-300'
                    }`}>sai-nitin-bogavarapu</p>
                  </div>
                </div>
                <FaArrowRight size={12} className={`transition-colors ${
                  theme === 'light'
                    ? 'text-gray-400 group-hover:text-blue-600'
                    : 'text-slate-600 group-hover:text-blue-400'
                }`} />
              </motion.a>
            </div>

            {/* Right — airy form */}
            <form onSubmit={handleSubmit} className="space-y-1">
              <div>
                <label className="form-label">Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange}
                  required placeholder="Your name" className={inputCls} />
              </div>
              <div>
                <label className="form-label">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange}
                  required placeholder="your@email.com" className={inputCls} />
              </div>
              <div>
                <label className="form-label">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  required rows={4} placeholder="Tell me about your opportunity..."
                  className={`${inputCls} resize-none`} />
              </div>
              <div className="pt-2">
                {sent ? (
                  <Button
                    variant="success"
                    disabled
                    ariaLabel="Message sent successfully"
                  >
                    ✓ Sent!
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    type="submit"
                    icon={FaArrowRight}
                    iconProps={{ className: ' text-blue-500 group-hover:translate-x-0.5 transition-transform' }}
                  >
                    <span class="text-blue-600">Send Message</span>
                    
                  </Button>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
