import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBuilding, FaHome, FaIndustry, FaExchangeAlt, FaLandmark, FaHardHat, FaCogs, FaMicrochip, FaSeedling, FaHotel, FaGraduationCap, FaMedkit, FaSearch, FaStar, FaTimes, FaBars } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

// Define category icons mapping
const categoryIcons = {
  Commercial: FaBuilding,
  Residential: FaHome,
  Manufacturing: FaIndustry,
  Trade: FaExchangeAlt,
  'Real Estate': FaLandmark,
  Construction: FaHardHat,
  Services: FaCogs,
  Technology: FaMicrochip,
  Agriculture: FaSeedling,
  Hospitality: FaHotel,
  Education: FaGraduationCap,
  Health: FaMedkit,
};

const projects = [
  { id: 1, name: 'Commercial', address: '2715 Ash Dr. San Jose, South Dakota', image: 'a.avif', category: 'Commercial', description: 'A modern commercial complex with state-of-the-art facilities.' },
  { id: 2, name: 'Residential', address: '2972 Westheimer Rd. Santa Ana, Illinois', image: 'b.avif', category: 'Residential', description: 'Luxury residential apartments with scenic views.' },
  { id: 3, name: "Recycling Plant", address: '1234 Elm St. Springfield, Illinois', image: 'c.avif', category: 'Manufacturing', description: 'Advanced recycling facility processing various materials.' },
  { id: 4, name: "Electric Bikes", address: '5678 Oak St. Seattle, Washington', image: 'd.avif', category: 'Manufacturing', description: 'Eco-friendly electric bikes with cutting-edge technology.' },
  { id: 5, name: "Plastic Products", address: '9101 Pine St. Austin, Texas', image: 'e.avif', category: 'Manufacturing', description: 'Manufacturing of high-quality plastic goods for various industries.' },
  { id: 6, name: "Fish Products", address: '1112 Maple St. Orlando, Florida', image: 'f.avif', category: 'Manufacturing', description: 'Premium fish products with sustainable sourcing.' },
  { id: 7, name: "Gold Jewelry", address: '1314 Birch St. New York, New York', image: 'g.avif', category: 'Trade', description: 'Exclusive collection of handcrafted gold jewelry.' },
  { id: 8, name: "Used Vehicles", address: '1516 Cedar St. Boston, Massachusetts', image: 'h.avif', category: 'Trade', description: 'Wide range of certified used vehicles at competitive prices.' },
  { id: 9, name: "Real Estate", address: '1718 Redwood St. Denver, Colorado', image: 'i.avif', category: 'Real Estate', description: 'Premium real estate properties with attractive returns.' },
  { id: 10, name: "Construction", address: '1920 Willow St. Phoenix, Arizona', image: 'j.avif', category: 'Construction', description: 'High-quality construction services for residential and commercial projects.' },
  { id: 11, name: "Advertising", address: '2122 Elm St. Sacramento, California', image: 'k.avif', category: 'Services', description: 'Innovative advertising solutions to boost your brand visibility.' },
  { id: 12, name: "Vehicle Rentals", address: '2324 Oak St. Portland, Oregon', image: 'l.avif', category: 'Services', description: 'Affordable vehicle rental services with a variety of options.' },
  { id: 13, name: "Tour Operations", address: '2526 Pine St. Honolulu, Hawaii', image: 'm.avif', category: 'Services', description: 'Exciting tour packages to explore beautiful destinations.' },
  { id: 14, name: "Media Services", address: '2728 Maple St. Chicago, Illinois', image: 'n.avif', category: 'Services', description: 'Comprehensive media services including production and marketing.' },
  { id: 15, name: "Health Services", address: '2930 Birch St. Las Vegas, Nevada', image: 'o.avif', category: 'Health', description: 'Top-notch health services with state-of-the-art facilities.' },
  { id: 16, name: "Food Trade", address: '3132 Cedar St. Miami, Florida', image: 'p.avif', category: 'Trade', description: 'Wide range of food products with quality assurance.' },
  { id: 17, name: "Waste Management", address: '3334 Redwood St. Seattle, Washington', image: 'p1.avif', category: 'Services', description: 'Effective waste management solutions for a cleaner environment.' },
  { id: 18, name: "Used Goods", address: '3536 Willow St. St. Louis, Missouri', image: 'e1.avif', category: 'Services', description: 'Quality used goods for budget-friendly shopping.' },
  { id: 19, name: "Spare Parts", address: '3738 Elm St. Philadelphia, Pennsylvania', image: 'e2.avif', category: 'Trade', description: 'Wide variety of spare parts for different vehicle brands.' },
  { id: 20, name: "Vehicle Repair", address: '3940 Oak St. Detroit, Michigan', image: 'e3.avif', category: 'Services', description: 'Expert vehicle repair services with guaranteed quality.' },
  { id: 22, name: "Publicity", address: '4344 Maple St. Boston, Massachusetts', image: 'e5.avif', category: 'Services', description: 'Creative publicity campaigns to enhance brand awareness.' },
  { id: 23, name: "E-commerce", address: '4546 Birch St. Phoenix, Arizona', image: 'e6.avif', category: 'Technology', description: 'Innovative e-commerce solutions for seamless online shopping.' },
  { id: 24, name: "Agriculture", address: '4748 Cedar St. Denver, Colorado', image: 'e7.avif', category: 'Agriculture', description: 'Sustainable agricultural practices for high yield production.' },
  { id: 25, name: "Tourism", address: '4950 Redwood St. Honolulu, Hawaii', image: 'e8.avif', category: 'Hospitality', description: 'Unforgettable tourism experiences with guided tours and activities.' },
  { id: 26, name: "Restaurants", address: '5152 Willow St. Miami, Florida', image: 'e9.avif', category: 'Hospitality', description: 'Culinary delights from top-rated restaurants across the region.' },
  { id: 27, name: "Educational Services", address: '5354 Elm St. Portland, Oregon', image: 'e10.avif', category: 'Education', description: 'High-quality educational services for all age groups.' },
  { id: 28, name: "Laboratories", address: '5556 Oak St. Chicago, Illinois', image: 'e11.avif', category: 'Education', description: 'State-of-the-art laboratories for scientific research and development.' },
  { id: 29, name: "Aircraft Trade", address: '5758 Pine St. Seattle, Washington', image: 'e12.avif', category: 'Trade', description: 'Exclusive deals on aircraft and aviation equipment.' },
  { id: 31, name: "Oil Products", address: '6162 Birch St. Miami, Florida', image: 'e14.avif', category: 'Trade', description: 'High-quality oil products for various industries.' },
  { id: 32, name: "Industrial Workshops", address: '6364 Cedar St. Detroit, Michigan', image: 'e15.avif', category: 'Manufacturing', description: 'Advanced industrial workshops with modern machinery.' },
];

export default function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('name');
  const [favorites, setFavorites] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const projectsPerPage = 6;


  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let result = projects;

    if (filter !== 'All') {
      result = result.filter(project => project.category === filter);
    }

    if (searchTerm) {
      result = result.filter(project => 
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'category') {
      result.sort((a, b) => a.category.localeCompare(b.category));
    }

    return result;
  }, [filter, searchTerm, sortOption]);

  // Calculate the total number of pages
  const pageCount = Math.ceil(filteredAndSortedProjects.length / projectsPerPage);

  // Get the projects for the current page
  const currentProjects = useMemo(() => {
    const start = (currentPage - 1) * projectsPerPage;
    const end = start + projectsPerPage;
    return filteredAndSortedProjects.slice(start, end);
  }, [filteredAndSortedProjects, currentPage]);

  // Handle filter change
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
    setIsCategoryMenuOpen(false);
  };

  // Reset the page to 1 when the filter, searchTerm, or sortOption changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter, searchTerm, sortOption]);

  // Toggle favorite
  const toggleFavorite = (projectId) => {
    setFavorites(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  return (
    <div className="container mx-auto p-4 bg-white text-black" id='projects'>
      <h2 className="text-4xl font-bold mb-8 text-center font-extrabold text-gray-900">{t('header.projects')}</h2>
      
      <div className="mb-4 flex flex-wrap items-center justify-between">
        <div className="relative w-full sm:w-auto mb-4 sm:mb-0">
          <input
            type="text"
            placeholder={t('search_projects')}
            className="w-full sm:w-auto pl-10 pr-4 py-2 border rounded-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <select
          className="w-full sm:w-auto ml-0 sm:ml-4 p-2 border rounded-md"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="name">{t('sort_by_name')}</option>
          <option value="category">{t('sort_by_category')}</option>
        </select>
      </div>
      
      <div className="flex flex-col lg:flex-row mb-8">
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
          <div className="bg-gray-100 rounded-lg p-4">
            <button
              className="lg:hidden w-full text-left py-2 px-4 rounded-md bg-yellow-500 text-white font-bold mb-4"
              onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
            >
              <FaBars className="inline-block mr-2" /> {t('categories')}
            </button>
            <div className={`${isCategoryMenuOpen ? 'block' : 'hidden'} lg:block`}>
              {['All', 'Commercial', 'Residential', 'Manufacturing', 'Trade', 'Real Estate', 'Construction', 'Services', 'Technology', 'Agriculture', 'Hospitality', 'Education', 'Health'].map((category) => {
                const Icon = categoryIcons[category] || FaCogs;
                return (
                  <button
                    key={category}
                    className={`flex items-center w-full text-left py-2 px-4 rounded-md transition-colors duration-200 ${
                      filter === category ? 'bg-yellow-500 text-white font-bold' : 'text-black hover:bg-gray-200'
                    }`}
                    onClick={() => handleFilterChange(category)}
                  >
                    <Icon className="mr-2" />
                    {t(`projects.${category}`)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {currentProjects.map((project) => (
              <motion.div 
                key={project.id} 
                className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img src={project.image} alt={t(`projects.${project.name}`)} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-yellow-500">{t(`projects.${project.name}`)}</h3>
                  <p className="text-sm text-gray-600 mb-2">{project.address}</p>
                  <p className="text-gray-800">{t(`projects.${project.description}`)}</p>
                  <div className="mt-4 flex items-center text-sm text-gray-600">
                    {categoryIcons[project.category] && React.createElement(categoryIcons[project.category], { className: "mr-2" })}
                    {t(`projects.${project.category}`)}
                  </div>
                </div>
                <button 
                  className="absolute top-2 right-2 text-yellow-500 hover:text-yellow-600"
                  onClick={() => toggleFavorite(project.id)}
                >
                  <FaStar className={favorites.includes(project.id) ? "text-yellow-500" : "text-gray-300"} />
                </button>
                <button 
                  className="absolute bottom-2 right-2 bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600"
                  onClick={() => setSelectedProject(project)}
                >
                  {t('details')}
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
        <button
          className="w-full sm:w-auto mb-4 sm:mb-0 bg-yellow-500 text-white px-6 py-2 rounded-full font-bold transition-colors duration-200 hover:bg-yellow-600"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          ← {t('previous')}
        </button>
        <div className="flex space-x-2 mb-4 sm:mb-0">
          {[...Array(pageCount)].map((_, i) => (
            <button
              key={i}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${currentPage === i + 1 ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-black'} transition-colors duration-200`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          className="w-full sm:w-auto bg-yellow-500 text-white px-6 py-2 rounded-full font-bold transition-colors duration-200 hover:bg-yellow-600"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
          disabled={currentPage === pageCount}
        >
          {t('next')} →
        </button>
      </div>

      {selectedProject && (
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-4"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
            >
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>
              <h2 className="text-2xl font-bold mb-4">{t(`projects.${selectedProject.name}`)}</h2>
              <img src={selectedProject.image} alt={t(`projects.${selectedProject.name}`)} className="w-full h-48 object-cover mb-4" />
              <p className="text-lg mb-2">{selectedProject.address}</p>
              <p>{t(`projects.${selectedProject.description}`)}</p>
              <div className="mt-4 text-sm text-gray-600 flex items-center">
                {categoryIcons[selectedProject.category] && React.createElement(categoryIcons[selectedProject.category], { className: "mr-2" })}
                {t(`projects.${selectedProject.category}`)}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
