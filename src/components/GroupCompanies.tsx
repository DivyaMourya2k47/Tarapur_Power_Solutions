import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Fuel, Factory, Pill } from 'lucide-react';

const subsidiaries = [
  {
    name: 'TPS Petroleums LLP',
    sector: 'Petroleum & Energy Trading',
    description: 'Core energy trading arm specializing in Light Diesel Oil (LDO), High-Speed Diesel (HSD), Diesel, and Biofuels. Leading supplier for industrial and commercial energy needs.',
    products: ['LDO', 'HSD', 'Diesel', 'Biofuels'],
    image: 'https://images.pexels.com/photos/5833843/pexels-photo-5833843.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: Fuel,
    website: 'https://tps-petroleums-llp.infinityfreeapp.com/',
  },
  {
    name: 'TPS Industries',
    sector: 'Industrial Trading & Allied Products',
    description: 'Comprehensive industrial supply and trading solutions across multiple sectors. Delivering quality products and reliable service to manufacturing and industrial clients.',
    products: ['Industrial Supplies', 'Allied Products', 'Trading Solutions'],
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: Factory,
    website: 'https://divyamourya2k47.github.io/Industries_tps/',
  },
  {
    name: 'Bhavika Pharma',
    sector: 'Pharmaceuticals & Intermediates',
    description: 'Regulated pharmaceutical operations focused on quality intermediates and pharmaceutical products. Operating with stringent quality controls and regulatory compliance.',
    products: ['Pharmaceutical Intermediates', 'Regulated Products'],
    image: 'https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: Pill,
  },
];

export default function GroupCompanies() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = subsidiaries.map((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.2 }
      );

      if (cardRefs.current[index]) {
        observer.observe(cardRefs.current[index]!);
      }

      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <p className="text-amber-500 text-sm uppercase tracking-widest font-medium">
            Our Portfolio
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-100">
            Group Companies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-6">
            Specialized subsidiaries operating with distinct excellence across energy, industry, and pharmaceuticals
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {subsidiaries.map((company, index) => {
            const Icon = company.icon;
            return (
              <div
                key={company.name}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`group relative overflow-hidden rounded-xl transition-all duration-1000 ${
                  visibleCards.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0">
                  <img
                    src={company.image}
                    alt={company.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/95" />
                </div>

                <div className="relative p-8 h-full flex flex-col justify-between min-h-[500px]">
                  <div>
                    <div className="mb-6 inline-block p-4 bg-amber-500/20 rounded-lg backdrop-blur-sm">
                      <Icon className="w-8 h-8 text-amber-500" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-100 mb-2">
                      {company.name}
                    </h3>

                    <p className="text-amber-500 text-sm font-medium mb-6 uppercase tracking-wide">
                      {company.sector}
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-6">
                      {company.description}
                    </p>

                    <div className="space-y-2 mb-8">
                      {company.products.map((product) => (
                        <div key={product} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                          <span className="text-sm text-gray-400">{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {company.website ? (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors font-medium"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  ) : (
                    <button className="group/btn flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors font-medium">
                      <span>Visit Website</span>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
