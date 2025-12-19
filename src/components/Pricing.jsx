import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Simple, Transparent Pricing</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Choose the perfect plan for your organization. All plans include core features.
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <span className={cn("text-gray-600 font-medium transition", !isYearly && "text-black")}>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="relative w-14 h-8 rounded-full bg-gray-300 transition-colors focus:outline-none"
                        >
                            <motion.div
                                className="absolute top-1 left-1 bg-white w-6 h-6 rounded-full shadow-sm"
                                animate={{ x: isYearly ? 24 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </button>
                        <span className={cn("text-gray-600 font-medium transition", isYearly && "text-black")}>
                            Yearly <span className="text-green-600 text-sm">(Save 20%)</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Starter Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 transition hover:-translate-y-2 hover:shadow-xl duration-300"
                    >
                        <h3 className="text-2xl font-bold mb-2 text-gray-900">Starter</h3>
                        <p className="text-gray-600 mb-6">Perfect for small teams</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-gray-900">₹{isYearly ? "4,999" : "5,999"}</span>
                            <span className="text-gray-600">/month</span>
                            <span className="block text-gray-500 text-sm mt-1">Excl. GST</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            {['Up to 500 assets', '3 user accounts', 'Basic reports', 'Email support', 'QR code generation'].map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#contact" className="block w-full bg-gray-900 text-white text-center py-3 rounded-xl font-semibold hover:bg-gray-800 transition active:scale-95">Get Started</a>
                    </motion.div>

                    {/* Professional Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border-2 border-gray-900 relative transform md:scale-105 shadow-2xl"
                    >
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-gray-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                            POPULAR
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-white">Professional</h3>
                        <p className="text-gray-300 mb-6">For growing businesses</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-white">₹{isYearly ? "9,499" : "11,999"}</span>
                            <span className="text-gray-300">/month</span>
                            <span className="block text-gray-400 text-sm mt-1">Excl. GST</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            {['Up to 2,000 assets', '10 user accounts', 'Advanced analytics', 'Priority support', 'Custom branding', 'Bulk import/export'].map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-green-400 mt-0.5" />
                                    <span className="text-gray-200">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#contact" className="block w-full bg-white text-gray-900 text-center py-3 rounded-xl font-semibold hover:bg-gray-100 transition active:scale-95 shadow-lg">Get Started</a>
                    </motion.div>

                    {/* Enterprise Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 transition hover:-translate-y-2 hover:shadow-xl duration-300"
                    >
                        <h3 className="text-2xl font-bold mb-2 text-gray-900">Enterprise</h3>
                        <p className="text-gray-600 mb-6">For large organizations</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-gray-900">Custom</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            {['Unlimited assets', 'Unlimited users', 'Dedicated account manager', 'Custom integrations', 'SLA guarantee', 'On-premise deployment'].map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#contact" className="block w-full bg-gray-900 text-white text-center py-3 rounded-xl font-semibold hover:bg-gray-800 transition active:scale-95">Contact Sales</a>
                    </motion.div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-gray-500 bg-gray-100 inline-block px-6 py-2 rounded-full text-sm font-medium">
                    * One-time Setup Cost applicable depending on customization & deployment requirements.
                </p>
            </div>
        </section>
    );
}
