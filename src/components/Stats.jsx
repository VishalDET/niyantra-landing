import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, CheckCircle, Zap, Activity } from 'lucide-react';

const stats = [
    { icon: TrendingDown, value: "30%", label: "Asset Loss Reduction", color: "text-blue-400", bg: "bg-blue-500/20", border: "hover:border-blue-500/30" },
    { icon: CheckCircle, value: "100%", label: "Audit Compliance", color: "text-green-400", bg: "bg-green-500/20", border: "hover:border-green-500/30" },
    { icon: Zap, value: "10x", label: "Faster Audits", color: "text-gray-400", bg: "bg-gray-500/20", border: "hover:border-gray-500/30" },
    { icon: Activity, value: "24/7", label: "Real-time Visibility", color: "text-orange-400", bg: "bg-orange-500/20", border: "hover:border-orange-500/30" },
];

export default function Stats() {
    return (
        <section className="relative py-24 bg-slate-900 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gray-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-2 block"
                    >
                        Proven Results
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Impact by the Numbers
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Real metrics that demonstrate how Niyantra transforms asset operations.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`group p-8 rounded-2xl bg-white/5 border border-white/10 ${stat.border} hover:bg-white/10 transition-all duration-300 backdrop-blur-sm`}
                        >
                            <div className={`flex items-center justify-center w-12 h-12 mb-6 rounded-xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div className="text-5xl font-bold text-white mb-2 flex items-baseline">
                                {stat.value}
                            </div>
                            <h3 className="text-gray-300 font-medium text-lg">{stat.label}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
