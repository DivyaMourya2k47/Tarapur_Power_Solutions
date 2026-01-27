import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import GroupCompanies from './components/GroupCompanies';
import Products from './components/Products';
import VisionMission from './components/VisionMission';
import CoreValues from './components/CoreValues';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppIcon from './components/WhatsAppIcon';
import PhoneIcon from './components/PhoneIcon';


function App() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-[#1a1a1a] text-gray-100">
      <Hero scrollY={scrollY} mousePosition={mousePosition} />
      <About />
      <Timeline />
      <GroupCompanies />
      <Products />
      <VisionMission />
      <CoreValues />
      <Contact />
      <Footer />
      <WhatsAppIcon />
      <PhoneIcon />
    </div>
  );
}

export default App;
