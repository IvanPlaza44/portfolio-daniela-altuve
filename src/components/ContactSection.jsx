import { useState, useRef } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';

const initial = { name: '', email: '', organization: '', message: '' };

function FloatingField({ label, name, type = 'text', value, onChange, required }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <div className="relative">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        className={`peer w-full bg-transparent border-b-2 pt-5 pb-2 px-0 text-slate-800 font-inter text-sm outline-none transition-colors duration-200 placeholder-transparent ${
          active
            ? 'border-teal-600'
            : 'border-stone-300 focus:border-teal-600'
        }`}
        placeholder={label}
      />
      <label
        htmlFor={name}
        className={`absolute left-0 font-inter text-sm transition-all duration-200 pointer-events-none ${
          active ? 'top-0 text-xs text-teal-600 font-medium' : 'top-5 text-stone-400'
        }`}
      >
        {label}
        {required && <span className="text-teal-600 ml-0.5">*</span>}
      </label>
    </div>
  );
}

function FloatingTextarea({ label, name, value, onChange }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <div className="relative">
      <textarea
        id={name}
        name={name}
        value={value}
        rows={4}
        onChange={(e) => onChange(name, e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
        className={`peer w-full bg-transparent border-b-2 pt-5 pb-2 px-0 text-slate-800 font-inter text-sm outline-none transition-colors duration-200 resize-none placeholder-transparent ${
          active ? 'border-teal-600' : 'border-stone-300 focus:border-teal-600'
        }`}
        placeholder={label}
      />
      <label
        htmlFor={name}
        className={`absolute left-0 font-inter text-sm transition-all duration-200 pointer-events-none ${
          active ? 'top-0 text-xs text-teal-600 font-medium' : 'top-5 text-stone-400'
        }`}
      >
        {label} <span className="text-teal-600">*</span>
      </label>
    </div>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleChange = (name, val) => {
    setForm((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulación de envío (Acá podés meter tu API o servicio de mail)
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm(initial);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Info */}
          <div>
            <p className="font-inter text-teal-700 text-sm font-semibold tracking-widest uppercase mb-4">
              Contact
            </p>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Let's Build Something Together
            </h2>
            <p className="font-inter text-slate-500 text-lg leading-relaxed mb-10">
              Whether you're seeking a language trainer, an instructional designer, or an L&D
              consultant for your organization — reach out and let's explore how we can
              create meaningful learning experiences.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-teal-700" />
                </div>
                <div>
                  <p className="font-inter text-xs text-slate-400 uppercase tracking-widest mb-0.5">Email</p>
                  <p className="font-inter text-slate-700 font-medium text-sm">
                    daniela.altuve@email.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-teal-700" />
                </div>
                <div>
                  <p className="font-inter text-xs text-slate-400 uppercase tracking-widest mb-0.5">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/altuvedaniela/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-teal-700 font-medium text-sm hover:text-teal-600 transition-colors"
                  >
                    linkedin.com/in/altuvedaniela
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-teal-700" />
                </div>
                <div>
                  <p className="font-inter text-xs text-slate-400 uppercase tracking-widest mb-0.5">Based In</p>
                  <p className="font-inter text-slate-700 font-medium text-sm">
                    Available Globally · Remote & On-Site
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-8 lg:p-10">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-4">
                  <Send size={22} className="text-teal-600" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-slate-900 mb-3">
                  Message Sent
                </h3>
                <p className="font-inter text-slate-500 text-sm leading-relaxed">
                  Thank you for reaching out. Daniela will respond within 1–2 business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-teal-600 hover:text-teal-700 font-inter text-sm font-medium underline underline-offset-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                <h3 className="font-playfair text-xl font-bold text-slate-900 mb-2">
                  Send a Message
                </h3>

                <FloatingField
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <FloatingField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <FloatingField
                  label="Organization (optional)"
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                />
                <FloatingTextarea
                  label="Your Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-slate-900 hover:bg-teal-800 text-white font-inter font-medium rounded-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}