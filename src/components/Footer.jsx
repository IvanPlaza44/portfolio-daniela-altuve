import { Globe2, Mail, ArrowUp } from 'lucide-react';
import { IconBrandLinkedin } from '@tabler/icons-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-slate-900 border-t border-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg  flex items-center justify-center">
              <Globe2 size={20} className="text-white" />
            </div>
            <div>
              <p className="font-playfair font-semibold text-white text-l">Daniela Altuve</p>
              <p className="font-inter text-slate-500 text-sm">Multilingual Educator</p>
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
              <IconBrandLinkedin stroke={2} />
            </a>
            <a
              href="mailto:daniela.altuvep@gmail.com"
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400  hover:text-white font-inter text-l transition-colors"
          >
            Back to top <ArrowUp size={18} />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/25 text-center">
          <p className="font-inter text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Daniela Altuve. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
