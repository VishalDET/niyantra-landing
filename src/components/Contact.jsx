import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ShieldCheck, Zap, X } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import SEO from './SEO';

const SuccessModal = ({ isOpen, onClose }) => (
    <AnimatePresence>
        {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={onClose}
                />
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative z-10"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                        <p className="text-gray-600 mb-8">
                            Thank you for your interest. Our team has received your information and will get back to you within 24 hours.
                        </p>
                        <button
                            onClick={onClose}
                            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition transform active:scale-95"
                        >
                            Got it
                        </button>
                    </div>
                </motion.div>
            </div>
        )}
    </AnimatePresence>
);

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        phone: '',
        budget: ''
    });
    const [status, setStatus] = useState(''); // 'loading', 'success', 'error'
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await addDoc(collection(db, "contacts"), {
                ...formData,
                timestamp: new Date()
            });
            setStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                companyName: '',
                phone: '',
                budget: ''
            });
            setShowModal(true);
        } catch (error) {
            console.error("Error adding document: ", error);
            setStatus('error');
            alert(`Error: ${error.message}. Check the console for more details.`);
        }
    };

    const location = useLocation();
    const isContactPage = location.pathname === '/contact';

    return (
        <section id="contact" className="py-24 bg-gray-50 font-rubik relative">
            {isContactPage && (
                <SEO
                    title="Contact Sales"
                    description="Get in touch with Niyantra sales team for a personalized demo of our IT Asset Management software."
                    url="/contact"
                />
            )}
            <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-semibold mb-6 text-gray-900">Get a Personalized Demo</h2>
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
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Work Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                                    placeholder="john@company.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                                    placeholder="Acme Inc."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Budget (Pricing)</label>
                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition bg-white"
                                >
                                    <option value="" disabled>Select a plan</option>
                                    <option value="Starter">Starter Plan (₹5,999/mo)</option>
                                    <option value="Professional">Professional Plan (₹11,999/mo)</option>
                                    <option value="Enterprise">Enterprise Plan (Custom)</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-black text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition transform active:scale-95 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? 'Submitting...' : 'Book Demo'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
