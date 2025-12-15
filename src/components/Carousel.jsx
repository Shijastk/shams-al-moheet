import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CAROUSEL_ITEMS } from '../constants';

const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionH2 = motion.h2;

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const navigate = (direction) => {
        if (direction === 'prev') {
            setCurrentIndex((prev) => (prev - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length);
        } else {
            setCurrentIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
        }
    };

    return (
        <section className="relative py-24 px-4 bg-cream overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="relative h-[400px] md:h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/50">
                    <AnimatePresence mode="wait">
                        <MotionDiv
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7 }}
                            className="absolute inset-0"
                        >
                            <img
                                src={CAROUSEL_ITEMS[currentIndex].image}
                                alt={CAROUSEL_ITEMS[currentIndex].title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />

                            <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full">
                                <MotionP
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-brand-sun font-sans tracking-wider uppercase text-sm font-semibold mb-2"
                                >
                                    {CAROUSEL_ITEMS[currentIndex].subtitle}
                                </MotionP>
                                <MotionH2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-white font-serif text-4xl md:text-5xl font-bold drop-shadow-lg"
                                >
                                    {CAROUSEL_ITEMS[currentIndex].title}
                                </MotionH2>
                            </div>
                        </MotionDiv>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="absolute bottom-8 right-8 flex space-x-4">
                        <button
                            onClick={() => navigate('prev')}
                            className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-brand-pink hover:border-brand-pink transition-all border border-white/30"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => navigate('next')}
                            className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-brand-pink hover:border-brand-pink transition-all border border-white/30"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
