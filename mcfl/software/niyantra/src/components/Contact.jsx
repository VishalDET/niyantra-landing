import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, Zap } from 'lucide-react';

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! We will act on this demo request.');
    };

    return (
        <section id="contact" className="py-24 bg-gray-50 font-rubik">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold mb-6 text-gray-900">Get a Personalized Demo</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Ready to streamline your asset management? Fill out the form and our team will be in touch within 24 hours.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: CheckCircle, title: "Custom Walkthrough", desc: "See features relevant to your specific needs.", color: "text-blue-600", bg: "bg-blue-100" },
                                { icon: ShieldCheck, title: "Security Assessment", desc: "Learn how we keep your data safe and compliant.", color: "text-gray-600", bg: "bg-gray-100" },
                                { icon: Zap, title: "Pricing Quote", desc: "Get a tailored quote based on your organization size.", color: "text-green-600", bg: "bg-green-100" }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4 hover:translate-x-2 transition duration-300">
                                    <div className={`${item.bg} p-3 rounded-lg ${item.color}`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                                        <p className="text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition hover:-translate-y-1 duration-300"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Work Email *</label>
                                <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition" placeholder="john@company.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                                <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition" placeholder="Acme Inc." />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition" placeholder="+91 98765 43210" />
                            </div>

                            <button type="submit" className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition transform active:scale-95 shadow-lg">
                                Book Demo
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
