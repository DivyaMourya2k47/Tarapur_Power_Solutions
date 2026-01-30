import { useEffect, useRef, useState } from 'react';

const products = [
  {
    name: 'Light Diesel Oil (LDO)',
    category: 'Energy Product',
    description: 'High-quality light diesel oil for industrial and commercial applications. Efficient combustion with minimal emissions.',
    specifications: ['Grade: Standard', 'Viscosity: Low', 'Flashpoint: Safe', 'Industrial Grade'],
    image: 'https://pacificoilindia.com/wp-content/uploads/2022/05/ldolight-diesel-oil.jpg',
  },
  {
    name: 'Bio Fuel II',
    category: 'Renewable Energy',
    description: 'Advanced biofuel blend reducing carbon footprint. Sustainable alternative for modern engines and heating systems.',
    specifications: ['Renewable Source', 'Low Carbon', 'Engine Compatible', 'Eco-Friendly'],
    image: 'https://media.istockphoto.com/id/177326500/photo/green-conservation-gas-pump-nozzle.jpg?s=612x612&w=0&k=20&c=GE-iK2pq3qxWeGO98sPocGYIv0FGP5nt-7kxZLJUzrs=',
  },
  {
    name: 'Carbon Black Feed Stock (CBFS)',
    category: 'Industrial Material',
    description: 'Premium carbon black feedstock for tire manufacturing and industrial applications. Superior quality and consistency.',
    specifications: ['High Purity', 'Industrial Grade', 'Consistent Quality', 'Manufacturing Ready'],
    image: 'https://5.imimg.com/data5/SELLER/Default/2020/9/OB/SY/UE/42772814/carbon-black-feed-stock-fuel-oil-500x500.jpg',
  },
  {
    name: 'Low Sulphur Heavy Stock (LSHS)',
    category: 'Energy Product',
    description: 'Low-sulphur heavy fuel oil meeting international environmental standards. Ideal for power generation and industrial heating.',
    specifications: ['Low Sulphur', 'Environmental Compliant', 'Cost Effective', 'Industrial Use'],
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/OB/DY/YY/59175960/furnace-oil-500x500.jpeg',
  },
  {
    name: 'Furnace Oil',
    category: 'Industrial Fuel',
    description: 'Reliable furnace oil for heating systems and industrial furnaces. Consistent quality for uninterrupted operations.',
    specifications: ['High Calorific Value', 'Stable Composition', 'Reliable Supply', 'Industrial Standard'],
    image: 'https://jainamindustries.com/wp-content/uploads/2023/02/image21.jpg',
  },
];

export default function Products() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = products.map((_, index) => {
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
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <p className="text-amber-500 text-sm uppercase tracking-widest font-medium">
            Core Products
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-100">
            Our Product Portfolio
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-6">
            Premium quality products serving industrial, energy, and manufacturing sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div
              key={product.name}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group relative overflow-hidden rounded-lg h-80 cursor-pointer transition-all duration-1000 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-500" />
              </div>

              <div className="relative h-full flex flex-col justify-between p-6">
                <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <p className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-3">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-bold text-gray-100 leading-tight">
                    {product.name}
                  </h3>
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {product.specifications.map((spec) => (
                      <div key={spec} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                        <span className="text-xs text-gray-300">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
