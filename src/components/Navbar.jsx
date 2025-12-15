import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom'; // Updated import

const MotionDiv = motion.div;

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Update logic: if on Home page, use anchor links. If on other pages, use full links or redirect to home+anchor?
    // User asked for "Menu & Contact" to be a separate page.
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Menu & Contact', path: '/menu-contact' },
        // Keep 'Story' as an anchor on Home page for now, or move it? 
        // If we are on /menu-contact, clicking Story should go to /#story
        { name: 'Story', path: '/#story' },
    ];

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${'bg-white/90 backdrop-blur-md shadow-sm py-4'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="font-serif text-2xl md:text-3xl font-bold text-brand-pink tracking-tight flex items-center gap-3">
                    <img src="/images/logo_transparent.png" alt="Shams Al Moheet Logo" className="h-16 w-auto  bg-white rounded-full" />
                    <span className="hidden lg:inline">Shams Al Moheet<span className="text-brand-ocean">.</span></span>
                    <span className="lg:hidden">Shams<span className="text-brand-ocean">.</span></span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        // Logic to handle anchor links from different pages
                        const isAnchor = link.path.includes('#');
                        const isCurrentPage = location.pathname === link.path;

                        // If it's a pure anchor like /#story, we might need HashLink or just simple logic
                        // For simplicity:

                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-sans text-sm font-medium tracking-wide uppercase transition-colors ${isCurrentPage ? 'text-brand-pink' : 'text-brand-dark hover:text-brand-pink'}`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-brand-dark p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <MotionDiv
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden p-6 flex flex-col space-y-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-lg font-serif text-brand-dark hover:text-brand-pink"
                                onClick={handleLinkClick}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </MotionDiv>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
