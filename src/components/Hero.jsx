import { ArrowDown, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900/30 via-slate-900 to-slate-900" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-teal-300 text-xs font-inter font-medium tracking-widest uppercase">
                Open to Opportunities
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-playfair text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6">
              Bridging Gaps Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
                Language
              </span>{' '}
              &amp; Professional Development
            </h1>

            {/* Subtitle */}
            <p className="font-inter text-slate-300 text-lg leading-relaxed mb-4 max-w-xl">
              Multilingual Educator and L&D Specialist. I design learner-centered instruction and custom training tracks in English, French, and Spanish to empower global talent and drive real-world communication.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-inter font-medium rounded-lg transition-all duration-200 shadow-lg shadow-teal-900/40 hover:shadow-teal-800/50 hover:-translate-y-0.5"
              >
                View Experience
                <ArrowDown size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white font-inter font-medium rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                <Mail size={16} />
                Get in Touch
              </a>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10">
              {[
                { number: '10+', label: 'Years of Experience' },
                { number: '3', label: 'Languages' },
                { number: '500+', label: 'Students' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-playfair text-3xl font-bold text-white">{stat.number}</p>
                  <p className="font-inter text-slate-400 text-sm mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Profile Picture Container */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* Agregamos 'group' aquí para controlar los hovers de los elementos hijos al unísono */}
            <div className="relative group cursor-pointer">
              
              {/* Decorative ring 1: Se desplaza hacia arriba/derecha y rota un poco en hover */}
              <div className="absolute -inset-4 rounded-[2.5rem] border border-teal-500/20 rotate-3 transition-all duration-500 ease-out group-hover:rotate-6 group-hover:translate-x-1 group-hover:-translate-y-1" />
              
              {/* Decorative ring 2: Rota en sentido opuesto en hover */}
              <div className="absolute -inset-8 rounded-[3rem] border border-slate-200/40 -rotate-2 transition-all duration-500 ease-out group-hover:-rotate-6 group-hover:-translate-x-1 group-hover:translate-y-1" />

              {/* Main photo frame: Se eleva sutilmente con una sombra más profunda */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px] rounded-[2rem] overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 shadow-2xl transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_25px_50px_-12px_rgba(13,148,136,0.15)]">
                
                {/* Photo: Efecto Zoom (scale-105) y paneo muy suave hacia el centro */}
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQH6va0RW2bTSQ/profile-displayphoto-scale_400_400/B56Z4YOTmIKEAg-/0/1778522869369?e=1781740800&v=beta&t=LPp4bZLtnk1AcPMcx2piOxmmgpRirep2kS5Sv2mwp-Q"
                  alt="Daniela Altuve — Multilingual Educator"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Overlay gradient: Se oscurece un pelín más en hover para que resalte más el texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Name card at bottom: Se levanta unos píxeles acompañando el movimiento */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 ease-out group-hover:translate-y-[-4px]">
                  <p className="font-playfair text-white font-semibold text-xl tracking-wide">Daniela Altuve</p>
                  <p className="font-inter text-teal-300 text-sm mt-0.5 font-medium">Multilingual Language Educator</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
