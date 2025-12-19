import React from 'react';
import SEO from '../components/SEO';

export default function TermsOfService() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <SEO
                title="Terms of Service"
                description="Review the Terms of Service for using Niyantra's IT Asset Management platform."
                url="/terms"
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg text-gray-600">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using the Niyantra Asset Management platform ("Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                    <p>
                        Niyantra provides a cloud-based IT asset management solution. We reserve the right to modify, suspend, or discontinue the Service at any time with or without notice.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
                    <p className="mb-4">You are responsible for:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Maintaining the confidentiality of your account credentials.</li>
                        <li>All activities that occur under your account.</li>
                        <li>Ensuring the accuracy of data entered into the platform.</li>
                        <li>Using the Service in compliance with all applicable laws and regulations.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Subscription & Payments</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Pricing:</strong> Subscriptions are billed in advance on a monthly or yearly basis as per the selected plan.</li>
                        <li><strong>Taxes:</strong> All listed prices are exclusive of GST and other applicable taxes.</li>
                        <li><strong>Setup Costs:</strong> A one-time setup cost of ₹50,000 - ₹1,00,000 may apply depending on customization and deployment requirements.</li>
                        <li><strong>Refunds:</strong> Subscription fees are non-refundable unless otherwise required by law.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                    <p>
                        The Service and its original content, features, and functionality are and will remain the exclusive property of Niyantra and its licensors. You retain all rights to the data you upload to the Service.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                    <p>
                        In no event shall Niyantra, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
                    <p>
                        We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                    </p>
                </section>
            </div>
        </div>
    );
}
