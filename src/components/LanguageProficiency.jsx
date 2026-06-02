import { Globe2 } from 'lucide-react';

const languages = [
  {
    name: 'Spanish',
    native: true,
    level: 'Native / Bilingual',
    levelCode: 'C2',
    description:
      'Mother tongue. Deep fluency in professional, academic, and everyday contexts.',
    flag: 've',
    accentColor: 'border-amber-300',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-700',
    dotColor: 'bg-amber-500',
    barColor: 'bg-amber-500',
    barWidth: 'w-full',
  },
  {
    name: 'English',
    native: false,
    level: 'Full Professional Proficiency',
    levelCode: 'C2',
    description:
      'Highly proficient across all professional domains — instruction, writing, and executive communication.',
    flag: 'us',
    accentColor: 'border-teal-300',
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-700',
    dotColor: 'bg-teal-500',
    barColor: 'bg-teal-500',
    barWidth: 'w-[95%]',
  },
  {
    name: 'French',
    native: false,
    level: 'Professional Working Proficiency',
    levelCode: 'B2',
    description:
      'Solid working proficiency for professional interaction, reading, and written communication.',
    flag: 'fr',
    accentColor: 'border-slate-300',
    badgeBg: 'bg-slate-100',
    badgeText: 'text-slate-700',
    dotColor: 'bg-slate-500',
    barColor: 'bg-slate-600',
    barWidth: 'w-[70%]',
  },
];

const cefr = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export default function LanguageProficiency() {
  return (
    <section id="languages" className="py-24 lg:py-32 bg-slate-900 overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-900/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-slate-800/60 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="font-inter text-teal-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Language Proficiency
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Communication Without Borders
          </h2>
          <p className="font-inter text-slate-400 text-lg leading-relaxed">
            Multilingualism is not just a skill — it is the foundation of every
            program designed and every connection made.
          </p>
        </div>

        {/* Language Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className={`group bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/8`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-3xl mb-3 block">{lang.flag}</span>
                  <h3 className="font-playfair text-2xl font-bold text-white">{lang.name}</h3>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-block px-3 py-1 rounded-lg text-xs font-inter font-bold tracking-wide border ${lang.accentColor} ${lang.badgeBg} ${lang.badgeText}`}
                  >
                    {lang.levelCode}
                  </span>
                  {lang.native && (
                    <p className="text-teal-400 text-xs font-inter font-semibold mt-1.5 tracking-wide uppercase">
                      Native
                    </p>
                  )}
                </div>
              </div>

              {/* Level label */}
              <p className="font-inter font-semibold text-slate-200 text-sm mb-2">
                {lang.level}
              </p>
              <p className="font-inter text-slate-400 text-sm leading-relaxed mb-6">
                {lang.description}
              </p>

              {/* Progress bar */}
              <div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${lang.barColor} ${lang.barWidth} transition-all duration-700`}
                  />
                </div>
                {/* CEFR scale */}
                <div className="flex justify-between mt-2">
                  {cefr.map((level) => (
                    <span
                      key={level}
                      className={`text-[10px] font-inter font-medium ${
                        level === lang.levelCode
                          ? 'text-white'
                          : 'text-slate-600'
                      }`}
                    >
                      {level}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="flex items-center gap-3 text-slate-500 text-sm font-inter">
          <Globe2 size={16} className="text-teal-600" />
          <span>Proficiency levels aligned with the Common European Framework of Reference (CEFR)</span>
        </div>
      </div>
    </section>
  );
}
