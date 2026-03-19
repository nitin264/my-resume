import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import { contact, hero } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-24 mb-16 py-6 px-8 translate-y-0 translate-x- -2">
      <div className="container mx-auto px-8 py-12">
        <div className="hidden md:flex items-center justify-between gap-8">
          {/* Left: Copyright */}
          <p className="text-slate-500 text-sm font-light">
            © {currentYear} {hero.name}
          </p>

          {/* Center: Social links */}
          <div className="flex items-center gap-6">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-300 transition-colors duration-200"
              title="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="https://github.com/nitin264/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-300 transition-colors duration-200"
              title="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="text-slate-500 hover:text-slate-300 transition-colors duration-200"
              title="Email"
            >
              <FaEnvelope size={16} />
            </a>
          </div>

          {/* Right: Tech note */}
          <p className="text-slate-500 text-sm font-light">
            Built with React + Tailwind
          </p>
        </div>

        {/* Mobile: stacked layout */}
        <div className="flex md:hidden flex-col gap-6 items-center">
          {/* Name */}
          <p className="text-slate-500 text-xs font-light text-center">
            © {currentYear} {hero.name}
          </p>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-300 transition-colors duration-200"
              title="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="https://github.com/nitin264/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-300 transition-colors duration-200"
              title="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="text-slate-500 hover:text-slate-300 transition-colors duration-200"
              title="Email"
            >
              <FaEnvelope size={16} />
            </a>
          </div>

          {/* Tech note */}
          <p className="text-slate-500 text-xs font-light text-center">
            Built with React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
