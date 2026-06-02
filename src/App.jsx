import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CoreSpecialties from './components/CoreSpecialties';
import ExperienceTimeline from './components/ExperienceTimeline';
import LanguageProficiency from './components/LanguageProficiency';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <CoreSpecialties />
        <ExperienceTimeline />
        <LanguageProficiency />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
