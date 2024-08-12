import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaProjectDiagram, FaServicestack, FaChartBar, FaComment, FaPhone, FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

    
  const direction = document.documentElement.getAttribute('dir') || 'ltr';
  const marginClass = direction === 'rtl' ? 'ml-2' : 'mr-2';

  const navigation = [
    { title: t("header.statistics"), path: "#statistics", icon: <FaChartBar className={`${marginClass}`} /> },
    { title: t("header.services"), path: "#services", icon: <FaServicestack className={`${marginClass}`} /> },
    { title: t("header.projects"), path: "#projects", icon: <FaProjectDiagram className={`${marginClass}`} /> },
    { title: t("header.testimonials"), path: "#testimonials", icon: <FaComment className={`${marginClass}`} /> },
    { title: t("header.contact"), path: "#contact", icon: <FaPhone className={`${marginClass}`} /> }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".nav-menu") && !e.target.closest(".nav-toggle")) {
        setIsMenuOpen(false);
      }
    };

    const smoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    try {
      document.addEventListener("click", handleClickOutside);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScroll);
      });
    } catch (error) {
      console.error("An error occurred during event listener setup:", error);
    }

    return () => {
      try {
        document.removeEventListener("click", handleClickOutside);
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.removeEventListener('click', smoothScroll);
        });
      } catch (error) {
        console.error("An error occurred during event listener cleanup:", error);
      }
    };
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    const newDirection = newLanguage === 'ar' ? 'rtl' : 'ltr';
    
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    i18n.changeLanguage(newLanguage);
  
    document.documentElement.setAttribute('dir', newDirection);
  };


  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-white w-full shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ">
            <a href="/" className="flex-shrink-0">
              <img
                src="/logoo.png"
                alt={t("company_logo")}
                className='w-[80px]'
              />
            </a>
          </div>
          <div className= {` hidden lg:flex space-x-1 xl:space-x-4 `}>
            {navigation.map((item, idx) => (
              <a
                key={idx}
                href={item.path}
                className={`text-gray-800 hover:text-yellow-600 px-2 xl:px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 xl:space-x-2 transition duration-150 ease-in-out`}
              >
                {item.icon}
                <span className={` hidden xl:inline`}>{item.title}</span>
              </a>
            ))}
          </div>
          <div className="hidden lg:flex items-center space-x-2">
  <button 
    onClick={toggleLanguage} 
    className="px-2 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-medium text-gray-800 hover:text-gray-900 border border-gray-200 hover:border-gray-300 transition duration-150 ease-in-out"
  >
    <FaGlobe className="inline-block mr-1" /> {language === 'en' ? 'AR' : 'EN'}
  </button>
</div>

          <div className="lg:hidden">
            <button 
              className="nav-toggle text-gray-500 hover:text-gray-800 transition duration-150 ease-in-out"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item, idx) => (
                <a
                  key={idx}
                  href={item.path}
                  className="text-gray-800 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 transition duration-150 ease-in-out"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              ))}
              <button 
                onClick={toggleLanguage} 
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-900 border border-gray-200 hover:border-gray-300 transition duration-150 ease-in-out"
              >
                <FaGlobe className="inline-block mr-1" /> {language === 'en' ? 'AR' : 'EN'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Header;
