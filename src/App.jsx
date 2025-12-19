import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './pages/Layout';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Technology from './components/Technology';
import Stats from './components/Stats';
import Contact from './components/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import SEO from './components/SEO';

function LandingPage() {
    return (
        <>
            <SEO
                title="Home"
                description="Niyantra is the ultimate IT Asset Management and CRM solution. Track hardware, manage licenses, and streamline IT operations with our powerful SaaS platform."
                keywords="IT Asset Management, Hardware Tracking, IT CRM, Asset Lifecycle, IT Inventory Software"
            />
            <Hero />
            <VideoSection />
            <Features />
            <Pricing />
            <Technology />
            <Stats />
            <Contact />
        </>
    );
}

function App() {
    return (
        <HelmetProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<LandingPage />} />
                        <Route path="privacy" element={<PrivacyPolicy />} />
                        <Route path="terms" element={<TermsOfService />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
            </Router>
        </HelmetProvider>
    );
}

export default App;
