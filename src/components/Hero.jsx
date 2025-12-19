import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, CheckCircle, ShieldCheck } from 'lucide-react';
import Background3D from './3d/Background3D';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen flex items-center">
            <Background3D />

            {/* Decorative gradient blobs */}
            <div className="absolute top-20 -left-40 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none"></div>
            <div className="absolute top-40 -right-40 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 shadow-sm mb-8 hover:scale-105 transition-transform cursor-default"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gray-500"></span>
                    </span>
                    <span className="bg-gradient-to-r from-gray-600 to-gray-600 bg-clip-text text-transparent font-semibold text-sm">
                        v1.0 is now live
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    className="text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <span className="block text-gray-500 text-4xl md:text-5xl mb-2 font-bold">Master Your Assets With</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-black drop-shadow-sm pb-2">
                        Niyantra
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    The intelligent IT asset management solution for modern enterprises.
                    <span className="block mt-2 text-lg text-gray-500">
                        Track, manage, and optimize your hardware lifecycle from acquisition to disposal.
                    </span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <a href="#contact" className="group bg-gray-900 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-gray-500/30 transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1">
                        <span>Get Started Free</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#features" className="group bg-white text-gray-900 border border-gray-200 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1 shadow-md hover:shadow-lg">
                        <PlayCircle className="w-5 h-5" />
                        <span>Watch Demo</span>
                    </a>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600 mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="font-medium">Free for 30 days</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">Enterprise-grade security</span>
                    </div>
                </motion.div>

                {/* Dashboard Preview */}
                <motion.div
                    className="relative mx-auto max-w-6xl"
                    initial={{ opacity: 0, y: 100, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-gray-600 via-gray-600 to-gray-600 rounded-[2.5rem] blur-2xl opacity-20 animate-pulse"></div>
                    <div className="relative rounded-3xl p-2 bg-gray-900/5 backdrop-blur-xl border border-white/20 shadow-2xl">
                        <div className="rounded-2xl overflow-hidden aspect-video relative border border-gray-200/20">
                            <img src="/assets/dashboard.jpeg" alt="Dashboard Preview" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-8 opacity-0 hover:opacity-100 transition-opacity duration-500">
                                <button className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white font-semibold flex items-center gap-2 hover:bg-white/30 transition">
                                    <PlayCircle className="w-6 h-6" /> View Interactive Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
