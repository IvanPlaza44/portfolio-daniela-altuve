import { useState, useEffect } from 'react';
import { Menu, X, Globe2 } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#hero' },
  { label: 'Specialties', href: '#specialties' },
  { label: 'Experience', href: '#experience' },
  { label: 'Languages', href: '#languages' },
];

export default function Navigation() {
  //STATES
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  //RENDER
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="size-15 rounded-full bg-teal-700 flex items-center justify-center">
            <img src="Logo.png" alt="" />
          </div>
          {/* <span className={`font-playfair font-semibold text-lg tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            Daniela Altuve
          </span> */}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-inter font-medium tracking-wide transition-colors duration-200 hover:text-teal-600 ${
                scrolled ? 'text-slate-600' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2 bg-teal-700 text-white text-sm font-medium rounded-lg hover:bg-teal-800 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 px-6 py-6 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-700 font-medium text-base hover:text-teal-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-2.5 bg-teal-700 text-white text-sm font-medium rounded-lg text-center hover:bg-teal-800 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
