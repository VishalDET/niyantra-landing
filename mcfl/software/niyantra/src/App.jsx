import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Features from './components/Features';
import Pricing from './components/Pricing';
import TechStack from './components/TechStack';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="font-lilex antialiased text-gray-900 bg-white">
            <Navbar />
            <Hero />
            <VideoSection />
            <Features />
            <Pricing />
            <TechStack />
            <Stats />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
