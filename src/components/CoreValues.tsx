import { useEffect, useRef, useState } from 'react';
import { Shield, Users, TrendingUp, Award, Lightbulb, Handshake } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Operating with transparency and unwavering ethical standards in every business decision.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering superior quality and exceeding expectations across all operations.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Embracing new technologies and approaches to stay ahead in evolving markets.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description: 'Building long-term relationships based on trust, reliability, and mutual growth.',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'Pursuing sustainable expansion while creating value for all stakeholders.',
  },
  {
    icon: Users,
    title: 'People First',
    description: 'Investing in our teams and fostering a culture of collaboration and respect.',
  },
];

export default function CoreValues() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = values.map((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.3 }
      );

      if (cardRefs.current[index]) {
        observer.observe(cardRefs.current[index]!);
      }

      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <p className="text-amber-500 text-sm uppercase tracking-widest font-medium">
            What Drives Us
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-100">
            Core Values
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`group relative p-8 rounded-xl bg-gradient-to-br from-[#1f1f1f] to-[#151515]
                  border border-gray-800 hover:border-amber-500/50 transition-all duration-700
                  ${visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500/0 to-orange-600/0
                  group-hover:from-amber-500/5 group-hover:to-orange-600/5 transition-all duration-700" />

                <div className="relative">
                  <div className="mb-6 inline-block p-4 bg-amber-500/10 rounded-lg
                    group-hover:bg-amber-500/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-amber-500" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-100 mb-4">
                    {value.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
