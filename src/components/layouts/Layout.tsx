import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#EBF8FF]">
            <div className="bg-[#2B9FDB] text-white text-center py-2 text-sm">
                Learn coding at the nearby Coding Pro Institute:{' '}
                <a href="#" className="underline font-medium">
                    Enquire now
                </a>
            </div>
            <Navbar />
            <main className="container mx-auto px-4">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;