import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from './Button';

const MotionSpan = motion.span;
const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionDiv = motion.div;

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background - Simulating Video with a high quality image for this demo */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero_image.webp"
                    alt="Happy kids eating ice cream in front of Al Moheet shop"
                    className="w-full h-full object-cover"
                />
                {/* Darker gradient overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-brand-dark/50" />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <MotionSpan
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-block mb-4 text-white font-sans text-sm md:text-base tracking-[0.2em] uppercase font-medium drop-shadow-md"
                >
                    Since 2020 • Dubai's Finest
                </MotionSpan>

                <MotionH1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 drop-shadow-lg leading-tight"
                >
                    Shams Al <br /> <span className="text-brand-pink italic">Moheet</span>
                </MotionH1>

                <MotionP
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="font-sans text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md font-light"
                >
                    Experience gourmet ice cream and sweet treats in the heart of Dubai. Handcrafted with passion and the finest ingredients.
                </MotionP>

                <MotionDiv
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Button size="lg" className="shadow-xl bg-brand-pink text-white border-none hover:bg-white hover:text-brand-pink">
                        Discover Our Craft
                    </Button>
                </MotionDiv>
            </div>

            {/* Scroll Indicator */}
            <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50 text-white cursor-pointer"
                onClick={() =>
                    document.getElementById("next-section")?.scrollIntoView({
                        behavior: "smooth",
                    })
                }
            >
                <MotionDiv
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ChevronDown size={42} className="drop-shadow-md" />
                </MotionDiv>
            </MotionDiv>

        </section>
    );
};

export default Hero;
