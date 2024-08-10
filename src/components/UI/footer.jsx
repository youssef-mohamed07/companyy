import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';

export default function Footer() {
  const [email, setEmail] = useState('');

  const footerNavs = [
    {
      label: "Resources",
      items: [
        { href: '#', name: 'Contact' },
        { href: '#', name: 'Support' },
        { href: '#', name: 'Documentation' },
        { href: '#', name: 'Pricing' },
      ],
    },
    {
      label: "About",
      items: [
        { href: '#', name: 'Terms' },
        { href: '#', name: 'License' },
        { href: '#', name: 'Privacy' },
        { href: '#', name: 'About Us' },
      ],
    },
    {
      label: "Explore",
      items: [
        { href: '#', name: 'Showcase' },
        { href: '#', name: 'Roadmap' },
        { href: '#', name: 'Languages' },
        { href: '#', name: 'Blog' },
      ],
    },
    {
      label: "Company",
      items: [
        { href: '#', name: 'Partners' },
        { href: '#', name: 'Team' },
        { href: '#', name: 'Careers' },
      ],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  const handleBackToTop = (e) => {
    e.preventDefault();
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-100 text-gray-800 py-8">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-yellow-600">Stay Connected</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-3 py-2 text-gray-900 bg-gray-200 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <FaEnvelope className="w-5 h-5 text-gray-400 absolute left-2 top-2.5" />
              </div>
              <button className="w-full px-4 py-2 text-sm font-medium text-white bg-yellow-600 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200">
                Subscribe to Newsletter
              </button>
            </form>
            <div className="flex items-center space-x-3 text-sm">
              <FaMapMarkerAlt className="w-4 h-4 text-gray-600" />
              <span>123 Business Ave, City, Country</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <FaPhone className="w-4 h-4 text-gray-600" />
              <span>+1 (123) 456-7890</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            {footerNavs.map((item, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-lg font-semibold text-yellow-600">{item.label}</h4>
                <ul className="space-y-2">
                  {item.items.map((el, idx) => (
                    <li key={idx}>
                      <a href={el.href} className="text-gray-600 hover:text-gray-900 transition duration-200">{el.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-300">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex space-x-4 text-gray-600">
              <a href="#" className="hover:text-gray-800 transition duration-200">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-800 transition duration-200">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-gray-800 transition duration-200">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-800 transition duration-200">
                <SiTelegram size={20} />
              </a>
              <a href="#" className="hover:text-gray-800 transition duration-200">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-gray-800 transition duration-200">
                <FaGithub size={20} />
              </a>
            </div>
            <div className="mt-4 sm:mt-0">
              <a href="/" onClick={handleBackToTop} className="text-yellow-600 hover:text-yellow-700 transition duration-200">Back to Top</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
