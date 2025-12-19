import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed w-full z-50 transition-all duration-300",
                scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-200 py-3" : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 cursor-pointer"
                        >
                            <img src="/assets/Niyantra_800x300.png" alt="Niyantra" className="h-12 w-auto" />
                        </motion.div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Features', 'Pricing', 'How it Works', 'Technology'].map((item, index) => (
                            <motion.a
                                key={item}
                                href={`/#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-gray-600 hover:text-black transition hover:scale-105 font-medium"
                            >
                                {item}
                            </motion.a>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <Link
                                to="/contact"
                                className="bg-black text-white px-5 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition shadow-lg shadow-gray-200 hover:scale-105 active:scale-95"
                            >
                                Book Demo
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-900 p-2"
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-4">
                            {['Features', 'Pricing', 'How it Works', 'Technology'].map((item) => (
                                <a
                                    key={item}
                                    href={`/#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="block text-gray-600 hover:text-black font-medium text-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                            <Link
                                to="/contact"
                                className="block w-full bg-black text-white px-5 py-3 rounded-lg font-medium text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Book Demo
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
