
import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.body.classList.toggle('light-mode');
    };

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo">SK.</a>

                <div className="nav-desktop">
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                    <button className="theme-toggle" onClick={toggleTheme}>
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </button>
                </div>

                <div className="nav-mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="nav-mobile-menu"
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'tween' }}
                        >
                            <ul>
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} onClick={() => setIsOpen(false)}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <button className="theme-toggle-mobile" onClick={toggleTheme}>
                                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                                    </button>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
