// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMoon, FiSun, FiMenu, FiX, FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { icon: <FiGithub className="w-5 h-5" />, href: 'https://github.com/TechwithArpit', label: 'GitHub' },
        { icon: <FiLinkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
        { icon: <FiMail className="w-5 h-5" />, href: 'mailto:arpit.sri2011@gmail.com', label: 'Email' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <a href="#" className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        Arpit.
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="relative text-lg text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="/resume.pdf" // Update with your actual resume path
                            download
                            className="px-4 py-2 flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300"
                        >
                            <FiDownload className="w-5 h-5 mr-2" />
                            Resume
                        </a>

                        <a
                            href="#contact"
                            className="px-6 py-2 md:text-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-full text-gray-400 hover:text-blue-400 focus:outline-none transition-colors duration-300"
                        >
                            {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden mt-4"
                    >
                        <div className="flex flex-col space-y-4 px-2 py-4 bg-gray-900/90 backdrop-blur-md rounded-lg border border-gray-800">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}

                            <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                                <a
                                    href="/resume.pdf" // Update with your actual resume path
                                    download
                                    className="px-4 py-2 flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300"
                                >
                                    <FiDownload className="w-5 h-5 mr-2" />
                                    Resume
                                </a>
                                <a
                                    href="#contact"
                                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                                >
                                    Hire Me
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;