import React from 'react';

import { Footer }  from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { Testimonials } from '../components/sections/Testimonials';
import { Pricing } from '../components/sections/Pricing';
import { FAQ } from '../components/sections/FAQ';

function App() {
    return (
        <div className="min-h-screen w-full bg-gray-100">
          
            <main>
                <Hero />
                <Features />
                <Testimonials />
                <Pricing />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
}

export default App;