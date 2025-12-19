import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="font-lilex antialiased text-gray-900 bg-white">
            <Navbar />
            <main className="pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
