import { useEffect, useRef, useState } from 'react';

export default function About() {
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
    <section ref={sectionRef} className="relative min-h-screen flex items-center py-24 lg:py-32">
      <div className="absolute inset-0">
        <img
          src="https://www.globalcoachcenter.com/wp-content/uploads/2024/05/Firefly-Business-workers-in-office-in-India-collaborating-in-conference-room-39423-1024x585.jpg"
          alt="Modern Office"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div
          className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}
        >
          <div className="space-y-4">
            <p className="text-amber-500 text-sm uppercase tracking-widest font-medium">
              Established 2016
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-100">
              About the Group
            </h2>
          </div>

          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-600" />

          <p className="text-xl text-gray-300 leading-relaxed">
            Tarapur Power Solutions is a diversified trading and solutions enterprise with its core strength
            in oil and fuel trading. Founded by <span className="text-amber-500 font-medium">Mr. Siddhesh Tare</span> in 2016,
            the company began with Light Diesel Oil (LDO) trading and steadily evolved into a multi-sector group.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed">
            Today, we operate through specialized subsidiaries in energy, industrial trading, and pharmaceuticals—each
            maintaining distinct operational excellence while benefiting from our unified strategic vision and governance.
          </p>

          <div className="pt-4 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-amber-500 rounded-full" />
              <p className="text-gray-300">Multi-sector diversification with focused expertise</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-amber-500 rounded-full" />
              <p className="text-gray-300">Strategic governance across energy and industrial sectors</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-amber-500 rounded-full" />
              <p className="text-gray-300">Committed to sustainable growth and innovation</p>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
        >
          <div className="relative">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2025/7/523846299/JM/IN/OX/243285141/industrial-light-diesel-oil.jpg"
              alt="Leadership"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-amber-500/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
