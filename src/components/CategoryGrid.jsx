import React from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES } from '../constants';

const MotionDiv = motion.div;

const CategoryGrid = () => {
    return (
        <section className="py-24 bg-white px-4">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl text-brand-pink mb-4">Our Collections</h2>
                    <p className="font-sans text-cream-dark/60 max-w-xl mx-auto">Curated experiences for every palate, from classic waffle cones to avant-garde sundaes.</p>
                </div>

                {/* Masonry-like layout using columns */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {CATEGORIES.map((category, index) => (
                        <MotionDiv
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="break-inside-avoid relative group overflow-hidden rounded-3xl cursor-pointer shadow-lg"
                        >
                            <img
                                src={category.image}
                                alt={category.title}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />

                            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <h3 className="font-serif text-2xl font-bold mb-2 text-brand-sun">{category.title}</h3>
                                    <p className="font-sans text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
