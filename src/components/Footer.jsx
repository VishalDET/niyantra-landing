import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <img src="/assets/Niyantra_800x300.png" alt="Niyantra" className="h-10 w-auto" />
                    <span className="text-gray-500 text-sm ml-2">© {new Date().getFullYear()}
                        <a href="https://digitaledgetech.in/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-yellow-600 to-purple-600 bg-clip-text text-transparent hover:text-black transition"> Digital Edge Technologies <i className="fa-solid fa-external-link-alt ml-1"></i></a>
                        All rights reserved.</span>
                </div>
                <div className="flex gap-6 text-gray-500 text-sm">
                    <Link to="/privacy" className="hover:text-black transition">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-black transition">Terms of Service</Link>
                    <Link to="/contact" className="hover:text-black transition">Contact</Link>
                </div>
            </div>
        </footer>
    );
}
