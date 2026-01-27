import { useEffect, useRef, useState } from 'react';
import { Target, Compass } from 'lucide-react';

export default function VisionMission() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-transparent to-orange-600" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="mb-8">
              <div className="inline-block p-4 bg-amber-500/10 rounded-lg mb-6">
                <Target className="w-10 h-10 text-amber-500" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
                Our Vision
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mb-8" />
            </div>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              To be a trusted multi-sector conglomerate recognized for excellence in energy,
              industry, and innovation—driving sustainable growth while creating lasting value
              for our stakeholders.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              We envision a future where our diverse portfolio of businesses works synergistically
              to meet the evolving needs of industries and communities we serve.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="mb-8">
              <div className="inline-block p-4 bg-amber-500/10 rounded-lg mb-6">
                <Compass className="w-10 h-10 text-amber-500" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
                Our Mission
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mb-8" />
            </div>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              To deliver exceptional value through strategic diversification, operational
              excellence, and unwavering commitment to quality across all our business verticals.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              We are dedicated to maintaining the highest standards of integrity, fostering
              innovation, and building lasting partnerships that drive mutual growth and prosperity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
