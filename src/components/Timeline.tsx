import { useEffect, useRef, useState } from 'react';

const milestones = [
  {
    year: '2016',
    title: 'Foundation',
    description: 'Tarapur Power Solutions established by Mr. Siddhesh Tare, beginning with LDO trading operations.',
  },
  {
    year: '2018',
    title: 'Expansion into Energy',
    description: 'Launched TPS Petroleums LLP, expanding product portfolio to include HSD, Diesel, and Biofuels.',
  },
  {
    year: '2020',
    title: 'Industrial Diversification',
    description: 'Established TPS Industries to provide comprehensive industrial trading and allied products.',
  },
  {
    year: '2022',
    title: 'Pharmaceutical Ventures',
    description: 'Entered regulated pharmaceutical sector with the launch of Bhavika Pharma.',
  },
  {
    year: '2024',
    title: 'Multi-Sector Leadership',
    description: 'Consolidated position as a diversified group with strategic presence across energy, industry, and pharmaceuticals.',
  },
];

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = milestones.map((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.3 }
      );

      if (itemRefs.current[index]) {
        observer.observe(itemRefs.current[index]!);
      }

      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-[#1a1a1a] via-[#141414] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <p className="text-amber-500 text-sm uppercase tracking-widest font-medium">
            Our Evolution
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-100">
            The Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto" />
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-amber-500 via-orange-600 to-amber-500 hidden lg:block" />

          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`relative transition-all duration-1000 ${
                  visibleItems.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
              >
                <div className={`lg:grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}>
                  <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}`}>
                    <div className="inline-block mb-4">
                      <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 text-transparent bg-clip-text">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                      {milestone.title}
                    </h3>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                    <div className="w-4 h-4 bg-amber-500 rounded-full absolute left-1/2 transform -translate-x-1/2 ring-8 ring-[#1a1a1a]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
