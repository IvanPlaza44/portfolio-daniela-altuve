import { BookOpen, Globe, Users } from 'lucide-react';

const specialties = [
  {
    icon: BookOpen,
    title: 'Language Education & Pedagogy',
    tagline: 'Fluency, confidence, and autonomy.',
    description:
      'Designing and delivering learner-centered instruction in Spanish, English, and French using communicative and task-based approaches focused on real-world communication.',
    highlights: [
      'Spanish, French & English instruction',
      'Communicative & task-based pedagogy',
      'Fluency & confidence development',
      'Autonomous learning framework',
    ],
    accent: 'from-teal-500/10 to-teal-600/5',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-700',
    border: 'hover:border-teal-200',
  },
  {
    icon: Globe, 
    title: 'Instructional Design & E-Learning',
    tagline: 'Meaningful digital environments.',
    description:
      'Architecting custom learning programs, dynamic curricula, and educational content powered by modern e-learning platforms and interactive digital teaching tools.',
    highlights: [
      'Curriculum & program architecture',
      'E-learning platform integration',
      'Digital teaching tools optimization',
      'Intercultural learning environments',
    ],
    accent: 'from-amber-500/10 to-amber-600/5',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-700',
    border: 'hover:border-amber-200',
  },
  {
    icon: Users, 
    title: 'Organizational Roles & Development',
    tagline: 'Supporting growth, clarifying goals.',
    description:
      'Leveraging cross-cultural expertise to manage communication, talent recruitment, and staff development initiatives within multicultural and international organizations.',
    highlights: [
      'Staff development & support',
      'Cross-cultural communication',
      'Talent recruitment assistance',
      'Complex concept simplification',
    ],
    accent: 'from-slate-500/10 to-slate-600/5',
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-700',
    border: 'hover:border-slate-300',
  },
];

export default function CoreSpecialties() {
  return (
    <section id="specialties" className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="font-inter text-teal-700 text-sm font-semibold tracking-widest uppercase mb-4">
            Core Specialties
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-5">
            Where Expertise Meets Impact
          </h2>
          <p className="font-inter text-slate-500 text-lg leading-relaxed">
            Three interconnected disciplines that define a comprehensive approach to
            language education and professional development.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {specialties.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group relative bg-white rounded-2xl border border-stone-200 ${item.border} p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60`}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-6`}>
                    <Icon size={22} className={item.iconColor} />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-playfair text-xl font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="font-inter text-sm text-teal-600 font-medium mb-4 italic">
                    {item.tagline}
                  </p>

                  {/* Description */}
                  <p className="font-inter text-slate-500 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2.5 text-sm text-slate-600 font-inter">
                        <span className="w-1 h-1 rounded-full bg-teal-500 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
