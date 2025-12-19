import React from 'react';
import { motion } from 'framer-motion';
import {
    Box,
    ArrowLeftRight,
    BarChart3,
    FileSpreadsheet,
    Building2,
    Users,
    QrCode,
    CalendarCheck,
    MapPin,
    Smartphone,
    CloudUpload,
    Bell
} from 'lucide-react';

const features = [
    { icon: Box, title: "Lifecycle Tracking", desc: "Monitor assets from procurement to disposal. Track warranty expiry, depreciation, and current status in real-time.", color: "text-blue-600" },
    { icon: ArrowLeftRight, title: "Smart Transfers", desc: "Seamlessly transfer assets between companies, branches, and employees with automated history logging and tracking.", color: "text-gray-600" },
    { icon: BarChart3, title: "Advanced Analytics", desc: "Gain insights with interactive charts. Visualize asset distribution, status breakdowns, and growth trends instantly.", color: "text-green-600" },
    { icon: FileSpreadsheet, title: "Comprehensive Reports", desc: "Generate detailed Excel reports with advanced filtering by company, status, and date range for audits.", color: "text-orange-600" },
    { icon: Building2, title: "Multi-Company Support", desc: "Manage multiple legal entities, branches, and locations under a single unified dashboard.", color: "text-indigo-600" },
    { icon: Users, title: "User Management", desc: "Role-based access control for admins, staff, and viewers to ensure data security and integrity.", color: "text-pink-600" },
    { icon: QrCode, title: "QR Code Tagging", desc: "Generate and scan QR codes for instant asset identification and quick access to asset details.", color: "text-cyan-600" },
    { icon: CalendarCheck, title: "Warranty & AMC Tracking", desc: "Never miss warranty expiry or AMC renewal dates with automated alerts and comprehensive tracking.", color: "text-red-600" },
    { icon: MapPin, title: "Service Center Locator", desc: "Find nearest brand service centers instantly with integrated Google Maps for quick repairs.", color: "text-teal-600" },
    { icon: Smartphone, title: "Mobile Responsive", desc: "Access your asset management system anywhere, anytime with fully responsive mobile design.", color: "text-violet-600" },
    { icon: CloudUpload, title: "Invoice Management", desc: "Upload and store invoices securely with Cloudinary integration for easy access and retrieval.", color: "text-amber-600" },
    { icon: Bell, title: "Real-time Notifications", desc: "Stay informed with instant notifications for asset transfers, assignments, and important updates.", color: "text-rose-600" },
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">Everything you need to manage assets</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Powerful features designed to streamline your IT operations and ensure accountability.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -8, rotateX: 2 }}
                            className="p-8 rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-300 hover:shadow-xl group perspective-1000"
                        >
                            <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className={`w-6 h-6 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
