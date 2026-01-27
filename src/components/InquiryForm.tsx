import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const products = [
  'Light Diesel Oil (LDO)',
  'Bio Fuel II',
  'Carbon Black Feed Stock (CBFS)',
  'Low Sulphur Heavy Stock (LSHS)',
  'Furnace Oil',
];

type InquiryType = 'product' | 'company';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company_name: '',
    inquiry_type: 'company' as InquiryType,
    product_interest: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const submitData = {
        fullName: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company_name,
        inquiryType: formData.inquiry_type,
        productInterest: formData.product_interest,
        message: formData.message,
      };

      const response = await fetch('https://script.google.com/macros/s/AKfycbwA5SxDEDWkE4N4z3I7tCk_apdadSKGYn9zgowRDHTVT8QUCfBIZxArbmgvKMIcst9x7Q/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      // With no-cors mode, we can't read the response, so we assume success if no error thrown
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company_name: '',
        inquiry_type: 'company',
        product_interest: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-block mb-4">
          <CheckCircle className="w-16 h-16 text-amber-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-100 mb-2">Thank You!</h3>
        <p className="text-gray-400">Your inquiry has been submitted successfully. We'll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg text-gray-100
              placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50
              transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg text-gray-100
              placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50
              transition-colors"
            placeholder="your.email@company.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg text-gray-100
              placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50
              transition-colors"
            placeholder="+91 XXXX XXXXXX"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
          <input
            type="text"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg text-gray-100
              placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50
              transition-colors"
            placeholder="Your company"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Inquiry Type</label>
          <select
            name="inquiry_type"
            value={formData.inquiry_type}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg text-gray-100
              focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50
              transition-colors appearance-none cursor-pointer"
          >
            <option value="company">Company Inquiry</option>
            <option value="product">Product Inquiry</option>
          </select>
        </div>

        {formData.inquiry_type === 'product' && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Product Interest</label>
            <select
              name="product_interest"
              value={formData.product_interest}
              onChange={handleChange}
              required={formData.inquiry_type === 'product'}
              className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg text-gray-100
                focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50
                transition-colors appearance-none cursor-pointer"
            >
              <option value="">Select a product</option>
              {products.map((product) => (
                <option key={product} value={product}>
                  {product}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Message / Inquiry Details</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg text-gray-100
            placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50
            transition-colors resize-none"
          placeholder="Tell us more about your inquiry..."
        />
      </div>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3
          bg-gradient-to-r from-amber-500 to-orange-600 text-black font-semibold rounded-lg
          hover:from-amber-400 hover:to-orange-500 transition-all duration-300
          disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="w-5 h-5" />
        {loading ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  );
}
