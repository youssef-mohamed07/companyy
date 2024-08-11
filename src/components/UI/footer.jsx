import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const footerNavs = [
    {
      label: t('resources'),
      items: [
        { href: '#', name: t('contactus') },
        { href: '#', name: t('oursupport') },
        { href: '#', name: t('documentation') },
        { href: '#', name: t('pricing') },
      ],
    },
    {
      label: t('about'),
      items: [
        { href: '#', name: t('terms') },
        { href: '#', name: t('license') },
        { href: '#', name: t('privacy') },
        { href: '#', name: t('aboutUs') },
      ],
    },
    {
      label: t('explore'),
      items: [
        { href: '#', name: t('showcase') },
        { href: '#', name: t('roadmap') },
        { href: '#', name: t('languages') },
        { href: '#', name: t('blog') },
      ],
    },
    {
      label: t('company'),
      items: [
        { href: '#', name: t('partners') },
        { href: '#', name: t('team') },
        { href: '#', name: t('careers') },
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
            <h3 className="text-2xl font-bold text-yellow-600">{t('stayConnected')}</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('enterEmail')}
                  className="w-full pl-10 pr-3 py-2 text-gray-900 bg-gray-200 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <FaEnvelope className="w-5 h-5 text-gray-400 absolute left-2 top-2.5" />
              </div>
              <button className="w-full px-4 py-2 text-sm font-medium text-white bg-yellow-600 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200">
                {t('subscribe')}
              </button>
            </form>
            <div className="flex items-center space-x-3 text-sm">
              <FaMapMarkerAlt className="w-4 h-4 text-gray-600" />
              <span>{t('address')}</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <FaPhone className="w-4 h-4 text-gray-600" />
              <span>{t('phone')}</span>
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
             
            </div>
            <div className="mt-4 sm:mt-0">
              <a href="/" onClick={handleBackToTop} className="text-yellow-600 hover:text-yellow-700 transition duration-200">{t('backToTop')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
