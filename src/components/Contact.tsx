import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import InquiryForm from './InquiryForm';

export default function Contact() {
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
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-[#1a1a1a]">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Contact"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-amber-500 text-sm uppercase tracking-widest font-medium mb-4">
            Get in Touch
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Connect with our team to explore partnership opportunities and learn more about our group companies
          </p>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="group p-8 rounded-xl bg-gradient-to-br from-[#1f1f1f] to-[#151515]
            border border-gray-800 hover:border-amber-500/50 transition-all duration-500">
            <div className="mb-6 inline-block p-4 bg-amber-500/10 rounded-lg
              group-hover:bg-amber-500/20 transition-colors duration-300">
              <MapPin className="w-8 h-8 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-100 mb-3">Location</h3>
            <p className="text-gray-400 leading-relaxed">
              H No . 1196/2, Shivnagar, Near Saidham Society, Palghar Road,
              <br />
              Boisar (West), Maharashtra - 401501
              <br />
              India
            </p>
          </div>

          <div className="group p-8 rounded-xl bg-gradient-to-br from-[#1f1f1f] to-[#151515]
            border border-gray-800 hover:border-amber-500/50 transition-all duration-500">
            <div className="mb-6 inline-block p-4 bg-amber-500/10 rounded-lg
              group-hover:bg-amber-500/20 transition-colors duration-300">
              <Phone className="w-8 h-8 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-100 mb-3">Phone</h3>
            <p className="text-gray-400 leading-relaxed">
              +91 9373956572
              <br />
              Monday-Saturday , 10am-6pm IST
            </p>
          </div>

          <div className="group p-8 rounded-xl bg-gradient-to-br from-[#1f1f1f] to-[#151515]
            border border-gray-800 hover:border-amber-500/50 transition-all duration-500">
            <div className="mb-6 inline-block p-4 bg-amber-500/10 rounded-lg
              group-hover:bg-amber-500/20 transition-colors duration-300">
              <Mail className="w-8 h-8 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-100 mb-3">Email</h3>
            <p className="text-gray-400 leading-relaxed">
              info@tarapurpower.com
              <br />
              Response within 24 hours
            </p>
          </div>
        </div>

        <div
          className={`mb-16 rounded-xl bg-gradient-to-br from-[#1f1f1f] to-[#151515]
            border border-gray-800 overflow-hidden transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7508.765141505723!2d72.75485610549363!3d19.78137032633252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71f001b86794b%3A0xf63ec4d4b1d0f2fc!2sTarapur%20Power%20Solutions!5e0!3m2!1sen!2sin!4v1769532755688!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div
          className={`p-8 md:p-12 rounded-xl bg-gradient-to-br from-[#1f1f1f] to-[#151515]
            border border-gray-800 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h3 className="text-3xl font-bold text-gray-100 mb-8">Send us an Inquiry</h3>
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
