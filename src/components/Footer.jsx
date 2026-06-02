import { Globe2, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-700 flex items-center justify-center">
              <Globe2 size={16} className="text-white" />
            </div>
            <div>
              <p className="font-playfair font-semibold text-white text-sm">Daniela Altuve</p>
              <p className="font-inter text-slate-500 text-xs">Multilingual Educator &amp; L&amp;D Specialist</p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/altuvedaniela/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-colors"
              aria-label="LinkedIn"
            >
              <Mail size={15} />
            </a>
            <a
              href="#contact"
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-500 hover:text-white font-inter text-xs transition-colors"
          >
            Back to top <ArrowUp size={12} />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="font-inter text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} Daniela Altuve. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
