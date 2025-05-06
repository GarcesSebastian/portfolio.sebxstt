'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const navLinks = [
    { label: 'Proyectos', href: '#projects' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Contacto', href: '#contact' }
  ];

  const languageLabels = {
    en: 'Inglés',
    es: 'Español'
  };


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.1 
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${isScrolled ? 'bg-dark/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-2"
          >
            <Code className="w-6 h-6 text-primary" />
            <span className="text-lg font-medium text-primary">Sebxstt</span>
          </motion.div>

          <motion.div 
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center space-x-6"
          >
            {navLinks.map((link) => (
              <motion.a 
                key={link.label}
                href={link.href}
                variants={linkVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-custom hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </motion.a>
            ))}

            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-2 text-gray-custom hover:text-primary transition-colors duration-300"
              >
                <Globe className="w-5 h-5" />
                <span>{languageLabels[language as keyof typeof languageLabels]}</span>
              </motion.button>

              <AnimatePresence>
                {isLanguageDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-40 bg-white dark:bg-dark/80 backdrop-blur-md rounded-lg shadow-lg border border-primary/10"
                  >
                    {Object.entries(languageLabels)
                      .filter(([key]) => key !== language)
                      .map(([key, label]) => (
                        <motion.button
                          key={key}
                          onClick={() => {
                            setLanguage(key)
                            setIsLanguageDropdownOpen(false)
                          }}
                          whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
                          className="w-full text-left px-4 py-2 hover:bg-primary/5 transition-colors duration-300"
                        >
                          {label}
                        </motion.button>
                      ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium 
                hover:bg-primary/90 transition-all duration-300 shadow-lg"
            >
              Hablemos
            </motion.button>
          </motion.div>

          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 w-full bg-dark/80 backdrop-blur-md shadow-lg"
            >
              <div className="flex flex-col space-y-4 p-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.label}
                    href={link.href}
                    className="text-gray-custom hover:text-primary transition-colors duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-gray-custom" />
                  <div className="flex space-x-2">
                    {Object.entries(languageLabels)
                      .map(([key, label]) => (
                        <button
                          key={key}
                          onClick={() => {
                            setLanguage(key);
                            setIsMenuOpen(false);
                          }}
                          className={`
                            text-sm font-medium transition-colors duration-300
                            ${language === key 
                              ? 'text-primary' 
                              : 'text-gray-custom hover:text-primary'
                            }
                          `}
                        >
                          {label}
                        </button>
                      ))}
                  </div>
                </div>
                
                <button
                  className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium 
                    hover:bg-primary/90 transition-all duration-300 shadow-lg"
                >
                  Hablemos
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;