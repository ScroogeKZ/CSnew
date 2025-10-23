import { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  language: string;
  onLanguageChange: (lang: string) => void;
}

const translations = {
  ru: {
    home: 'Главная',
    services: 'Услуги',
    cases: 'Кейсы',
    blog: 'Блог',
    contacts: 'Контакты',
  },
  kz: {
    home: 'Басты бет',
    services: 'Қызметтер',
    cases: 'Жобалар',
    blog: 'Блог',
    contacts: 'Байланыс',
  },
  en: {
    home: 'Home',
    services: 'Services',
    cases: 'Cases',
    blog: 'Blog',
    contacts: 'Contacts',
  },
};

export default function Header({ currentPage, onNavigate, language, onLanguageChange }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const t = translations[language as keyof typeof translations];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: t.home, path: '/' },
    { label: t.services, path: '/services' },
    { label: t.cases, path: '/cases' },
    { label: t.blog, path: '/blog' },
    { label: t.contacts, path: '/contacts' },
  ];

  const handleNavigation = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-3' 
            : 'py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className={`rounded-2xl transition-all duration-300 ${
              scrolled 
                ? 'glass-effect shadow-2xl shadow-black/20' 
                : 'bg-gray-900/20 backdrop-blur-sm'
            }`}
            layout
          >
            <div className="flex items-center justify-between h-16 px-6">
              {/* Logo */}
              <motion.button 
                onClick={() => handleNavigation('/')}
                className="group flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <motion.div 
                    className="w-10 h-10 bg-gradient-to-br from-[#A3132D] to-[#6B0D1E] rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white">CS</span>
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#A3132D] to-[#6B0D1E] rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity"
                  />
                </div>
                <span className="hidden sm:block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  CreativeStudio
                </span>
              </motion.button>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-1">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className={`relative px-4 py-2 rounded-lg transition-colors ${
                      currentPage === item.path
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {currentPage === item.path && (
                      <motion.span
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-[#A3132D] to-[#6B0D1E] rounded-full"
                        layoutId="activeNav"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </nav>

              {/* Right Side Actions */}
              <div className="flex items-center space-x-3">
                {/* Language Switcher */}
                <div className="relative">
                  <motion.button
                    onClick={() => setLangMenuOpen(!langMenuOpen)}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg glass-effect hover:bg-gray-800/50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Globe className="w-4 h-4" />
                    <span className="uppercase text-sm">{language}</span>
                  </motion.button>
                  
                  <AnimatePresence>
                    {langMenuOpen && (
                      <motion.div
                        className="absolute right-0 mt-2 w-24 glass-effect rounded-xl shadow-2xl overflow-hidden border border-gray-700"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {['ru', 'kz', 'en'].map((lang) => (
                          <motion.button
                            key={lang}
                            onClick={() => {
                              onLanguageChange(lang);
                              setLangMenuOpen(false);
                            }}
                            className={`w-full px-4 py-2 text-left transition-colors uppercase text-sm ${
                              language === lang 
                                ? 'bg-gradient-to-r from-[#A3132D] to-[#6B0D1E] text-white' 
                                : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                            }`}
                            whileHover={{ x: 5 }}
                          >
                            {lang}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg glass-effect hover:bg-gray-800/50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AnimatePresence mode="wait">
                    {mobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="w-6 h-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="w-6 h-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Content */}
            <motion.div
              className="absolute top-24 left-4 right-4 glass-effect rounded-2xl p-6 shadow-2xl border border-gray-700"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-2">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className={`px-6 py-4 rounded-xl text-left transition-all ${
                      currentPage === item.path
                        ? 'bg-gradient-to-r from-[#A3132D] to-[#6B0D1E] text-white shadow-lg'
                        : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
