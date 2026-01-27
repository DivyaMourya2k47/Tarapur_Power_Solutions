import { ChevronDown } from 'lucide-react';

interface HeroProps {
  scrollY: number;
  mousePosition: { x: number; y: number };
}

export default function Hero({ scrollY, mousePosition }: HeroProps) {
  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translateY(${parallaxOffset}px) translateX(${mousePosition.x * 0.5}px) translateY(${mousePosition.y * 0.5}px) scale(1.1)`,
        }}
      >
        <img
          src="https://fohfurniture.com/wp-content/uploads/2020/01/FOH-JCED202-scaled.jpg"
          alt="Modern Corporate Office"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent" />
      </div>

      <div className="relative h-full flex items-center justify-center px-6">
        <div className="max-w-5xl text-center space-y-6">  
          <div
            className="transition-all duration-1000 ease-out"
            style={{
              opacity: Math.max(0, 1 - scrollY / 500),
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <img
              src="https://i.ibb.co/fdNrvGy7/TPS-logo.jpg"
              alt="Tarapur Power Solutions Logo"
              className="h-24 md:h-32 mx-auto mb-6"
            />
          </div>

          <div
            className="transition-all duration-1000 ease-out"
            style={{
              opacity: Math.max(0, 1 - scrollY / 500),
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide">
              TARAPUR POWER SOLUTIONS
            </h2>
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight transition-all duration-1000 ease-out"
            style={{
              opacity: Math.max(0, 1 - scrollY / 500),
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <span className="block text-gray-100">Powering Growth</span>
            <span className="block bg-gradient-to-r from-amber-500 to-orange-600 text-transparent bg-clip-text">
              Across Energy, Industry & Innovation
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out"
            style={{
              opacity: Math.max(0, 1 - scrollY / 400),
              transform: `translateY(${scrollY * 0.4}px)`,
            }}
          >
            A diversified trading and solutions enterprise with core strength in oil and fuel trading,
            evolved into a multi-sector group with specialized subsidiaries in energy, industrial trading, and pharmaceuticals.
          </p>

          <div
            className="pt-8 transition-opacity duration-1000 ease-out"
            style={{
              opacity: Math.max(0, 1 - scrollY / 300),
            }}
          >
            <ChevronDown className="w-10 h-10 mx-auto text-amber-500 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
