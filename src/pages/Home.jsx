import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import CategoryGrid from '../components/CategoryGrid';
import FlavorLibrary from '../components/FlavorLibrary';
import Story from '../components/Story';
import Services from '../components/Services';
import Footer from '../components/Footer';
import MeltDivider from '../components/MeltDivider';

const Home = () => {
    return (
        <>
            <main>
                <Hero />

                <div id="next-section" className="relative">
                    <MeltDivider position="top" className="absolute -top-12 md:-top-24 z-20 text-cream" />
                    <Carousel />
                </div>

                <CategoryGrid />

                <MeltDivider position="bottom" className="text-cream -mb-1 relative z-10" />
                <FlavorLibrary />

                <Story />

                <MeltDivider position="top" className="text-brand-light -mt-1 relative z-10" />
                <Services />
            </main>
        </>
    );
};

export default Home;
