import { useState } from 'react';
import { MapPin, Calendar, ChevronDown } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Spanish Educational Assistant',
    company: 'Académie de Versailles',
    location: 'Sceaux, Isla de Francia, Francia · Presencial',
    period: '2013 — 2014',
    type: 'Full-time',
    achievements: [
      'Delivered Spanish language instruction to high school students in France as part of an international internship program',
      'Facilitated language development, promoted student engagement, and supported cross-cultural exchange in the classroom.',
    ],
  },
  {
    id: 2,
    title: 'French Instructor',
    company: 'Alianza Francesa',
    location: 'Mérida, Venezuela',
    period: '2014 — 2015',
    type: 'Full-time',
    achievements: [
      'Teaching French as a second language to people of all ages.',
      "Managed to get a certification as a proof reader of the test called DELF (Diplome d’Etudes en Langue Française), levels A1, A2, B1 and B2 of the Council of Europe's Common European Framework of Reference for Languages.",
    ],
  },
  {
    id: 3,
    title: 'Telesales Representative',
    company: 'Plan Wealth Management',
    location: 'Ciudad de México, México',
    period: '2015 — 2017',
    type: 'Full-time',
    achievements: [
      'Generated and qualified leads through strategic prospecting and cold calling. ',
      'Strengthened client communication and relationship-building skills. ',
      "Coordinated and managed the General Director’s daily agenda, optimizing time management and operational efficiency."
    ],
  },
  {
    id: 4,
    title: 'Business Development Manager',
    company: 'Plan Wealth Management',
    location: 'Ciudad de México, México',
    period: '2017 — 2019',
    type: 'Full-time',
    achievements: [
      'Oversaw recruitment and onboarding of new team members, delivering training to support performance and development.',
      'Collaborated closely with the Area Director on administrative and operational processes, improving organization and workflow efficiency.',
    ],
  },
  {
    id: 5,
    title: 'French Instructor',
    company: 'Iberostar Hotels & Resorts',
    location: 'Mexico',
    period: 'feb. 2019 — dic. 2019',
    type: 'Part-time',
    achievements: [
      'Delivering French language training to hotel staff as part of internal development programs.',
    ],
  },
  {
    id: 6,
    title: 'Language Instructor',
    company: 'Self-employed · Autónomo',
    location: 'Remote',
    period: '2020 — Present',
    type: 'Full-time',
    achievements: [
      'Deliver personalized Spanish, English and French instruction to an international student base through private clients and online platforms. ',
      'Design and implement lesson plans aligned with individual learning goals, with a strong focus on communicative competence and real-world language use.',
    ],
  }
];

export default function ExperienceTimeline() {
  const [active, setActive] = useState(1);

  return (
    <section id="experience" className="py-24 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="font-inter text-teal-700 text-sm font-semibold tracking-widest uppercase mb-4">
            Professional Experience
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            A Career Built on Impact
          </h2>
          <p className="font-inter text-slate-400 text-lg leading-relaxed">
            Each role has deepened expertise in language education, instructional design, and organizational development.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Timeline Nav (left) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {experiences.map((exp, idx) => (
              <button
                key={exp.id}
                onClick={() => setActive(exp.id)}
                className={`group w-full text-left rounded-xl border p-5 transition-all duration-300 ${
                  active === exp.id
                    ? 'bg-white border-stone-200 hover:border-slate-300 hover:bg-stone-50'
                    : 'bg-slate-900 border-slate-900 shadow-lg shadow-slate-900/20'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    {/* Step indicator */}
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-xs font-inter font-semibold tracking-widest uppercase ${
                          active === exp.id ? 'text-teal-400' : 'text-slate-400'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <span
                        className={`text-xs font-inter px-2 py-0.5 rounded-full ${
                          active === exp.id
                            ? 'bg-stone-100 font-bold text-teal-500'
                            : 'bg-teal-900/60 text-teal-300'
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>

                    <h3
                      className={`font-playfair font-semibold text-base leading-snug ${
                        active === exp.id ?  'text-slate-800': 'text-white'
                      }`}
                    >
                      {exp.title}
                    </h3>
                    <p
                      className={`font-inter text-sm mt-1 ${
                        active === exp.id ? 'text-slate-500' :'text-slate-400' 
                      }`}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`flex-shrink-0 mt-1 transition-transform duration-200 ${
                      active === exp.id ?  'text-slate-400': 'rotate-180 text-teal-400'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Detail Panel (right) */}
          {experiences
            .filter((e) => e.id === active)
            .map((exp) => (
              <div
                key={exp.id}
                className="lg:col-span-3 rounded-2xl bg-stone-50 border border-stone-200 p-8 lg:p-10"
              >
                {/* Header */}
                <div className="mb-8">
                  <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                    {exp.title}
                  </h3>
                  <p className="font-inter text-teal-700 font-semibold text-base mb-4">
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-1.5 text-slate-500 text-sm font-inter">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-sm font-inter">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-stone-200 mb-8" />

                {/* Achievements */}
                <p className="font-inter text-xs font-bold tracking-widest uppercase text-slate-500 mb-5">
                  Key Achievements
                </p>
                <ul className="space-y-4">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                      <p className="font-inter text-slate-600 text-sm leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
