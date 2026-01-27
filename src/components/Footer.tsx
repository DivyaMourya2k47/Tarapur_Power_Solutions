export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-600
              text-transparent bg-clip-text mb-4">
              Tarapur Power Solutions
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              A diversified trading and solutions enterprise powering growth across energy, industry, and innovation since 2016.
            </p>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-100 mb-4">Group Companies</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  TPS Petroleums LLP
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  TPS Industries
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Bhavika Pharma
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-100 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Our Journey
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Tarapur Power Solutions. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Founded by Mr. Siddhesh Tare | Established 2016
          </p>
        </div>
      </div>
    </footer>
  );
}
