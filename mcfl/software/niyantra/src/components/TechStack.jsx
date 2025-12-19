import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Flame, Wind, BarChart } from 'lucide-react';

export default function TechStack() {
    return (
        <section id="tech" className="py-20 border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8"
                >
                    Powered by Modern Technology
                </motion.p>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {[
                        { icon: Atom, name: "React", color: "text-blue-500" },
                        { icon: Flame, name: "Firebase", color: "text-orange-500" },
                        { icon: Wind, name: "Tailwind", color: "text-cyan-500" },
                        { icon: BarChart, name: "Recharts", color: "text-indigo-500" }
                    ].map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center bg-gray-50 rounded-lg p-4 px-8 gap-2 font-semibold text-xl cursor-default"
                        >
                            <tech.icon className={tech.color} />
                            {tech.name}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
