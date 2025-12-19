import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <img src="/assets/Niyantra_800x300.png" alt="Niyantra" className="h-10 w-auto" />
                    <span className="text-gray-500 text-sm ml-2">© {new Date().getFullYear()} All rights reserved.</span>
                </div>
                <div className="flex gap-6 text-gray-500 text-sm">
                    <a href="#" className="hover:text-black transition">Privacy Policy</a>
                    <a href="#" className="hover:text-black transition">Terms of Service</a>
                    <a href="#" className="hover:text-black transition">Contact</a>
                </div>
            </div>
        </footer>
    );
}
