import React from 'react';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <SEO
                title="Privacy Policy"
                description="Read Niyantra's Privacy Policy to understand how we collect, use, and protect your data."
                url="/privacy"
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg text-gray-600">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                    <p>
                        Welcome to Niyantra Asset Management ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your data. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you use our SaaS platform and services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data We Collect</h2>
                    <p className="mb-4">We collect information to provide and improve our services to you:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Account Information:</strong> Name, email address, company name, phone number, and billing details provided during registration.</li>
                        <li><strong>Asset Data:</strong> Information about the assets you manage through our platform, including hardware specifications, locations, and user assignments.</li>
                        <li><strong>Usage Data:</strong> Information on how you interact with our platform, including log files, device information, and analytics.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Data</h2>
                    <p className="mb-4">We use the collected data for the following purposes:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>To provide, maintain, and improve our SaaS platform.</li>
                        <li>To process transactions and manage your subscription.</li>
                        <li>To generate asset reports and analytics as requested by you.</li>
                        <li>To communicate with you regarding updates, security alerts, and support.</li>
                        <li>To comply with legal obligations and enforce our terms.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                    <p>
                        We implement industry-standard security measures to protect your data, including encryption in transit and at rest, strict access controls, and regular security assessments. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention & Rights</h2>
                    <p className="mb-4">
                        We retain your data for as long as your account is active or as needed to provide services. You have the right to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Access information we hold about you.</li>
                        <li>Request correction of inaccurate data.</li>
                        <li>Request deletion of your data (subject to legal retention requirements).</li>
                        <li>Export your asset data from the platform.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Services</h2>
                    <p>
                        We may share data with trusted third-party service providers (e.g., cloud hosting, payment processors) strictly for the purpose of operational service delivery. We do not sell your data to advertisers.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at support@niyantra.com.
                    </p>
                </section>
            </div>
        </div>
    );
}
