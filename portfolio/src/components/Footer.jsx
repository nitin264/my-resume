import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import { contact, hero } from '../data';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 py-16">
      <div className="w-full max-w mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          <p className="text-slate-700 text-xs text-center md:text-left">
            © 2026 {hero.name}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={contact.linkedin}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 hover:text-slate-300 text-xs transition-colors"
            >
              <FaLinkedin size={13} />
              LinkedIn
            </a>
            <a
              href="https://github.com/nitin264/"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 hover:text-slate-300 text-xs transition-colors"
            >
              <FaGithub size={13} />
              GitHub
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-300 text-xs transition-colors"
            >
              <FaEnvelope size={12} />
              Email
            </a>
          </div>

          <p className="text-slate-600 text-xs text-center md:text-right">
            Built with React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
