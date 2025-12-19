import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function VideoSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 bg-gray-50 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-gray-900"
                    >
                        Why Niyantra?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        See how we're redefining asset management with intelligence and simplicity.
                    </motion.p>
                </div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-5xl mx-auto"
                >
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                    {/* Video Container */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                        <video
                            id="how-it-works"
                            src="/assets/Niyantra__Intelligent_Asset_Mgmt.mp4"
                            className="w-full h-auto object-cover"
                            controls
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
