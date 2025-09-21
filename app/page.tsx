import { HeroSection } from '@/components/HeroSection';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <About />
        <Projects />
        <Achievements />
        <Contact />
      </div>
    </>
  );
}
