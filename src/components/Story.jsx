import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const Story = () => {
    return (
        <section id="story" className="bg-white overflow-hidden mb-[-85px]">
            <div className="flex flex-col lg:flex-row">
                {/* Image Side */}
                <MotionDiv
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 h-[500px] lg:h-auto relative"
                >
                    <img
                        src="/images/story_kids.png"
                        alt="Child enjoying ice cream"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-pink/10 mix-blend-multiply" />
                </MotionDiv>

                {/* Text Side */}
                <div className="lg:w-1/2 p-8 lg:p-24 flex items-center bg-brand-light">
                    <MotionDiv
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-brand-pink font-bold tracking-widest text-sm uppercase mb-4 block">Our Story</span>
                        <h2 className="font-serif text-4xl lg:text-5xl text-brand-dark mb-8 leading-tight">
                            A Symphony of <br /> Cream & Culture
                        </h2>

                        <div className="space-y-6 font-sans text-cream-dark/70 text-lg leading-relaxed">
                            <p>
                                Founded in the vibrant heart of Dubai, and built on a dream to bring authentic, high-quality frozen delights to the desert. Shams Al Moheet represents a new standard in gourmet ice cream.
                            </p>
                            <p>
                                Every scoop is a celebration of flavor, using only the finest ingredients sourced from around the world and crafted locally with care. From our signature soft serve to our artisanal hard scoops, we promise pure indulgence.
                            </p>
                        </div>

                        <div className="mt-12 flex space-x-12">
                            <div>
                                <span className="block font-serif text-3xl text-brand-pink font-bold">100%</span>
                                <span className="text-sm text-cream-dark/60 uppercase tracking-wide">Natural</span>
                            </div>
                            <div>
                                <span className="block font-serif text-3xl text-brand-pink font-bold">24hr</span>
                                <span className="text-sm text-cream-dark/60 uppercase tracking-wide">Aging Process</span>
                            </div>
                            <div>
                                <span className="block font-serif text-3xl text-brand-pink font-bold">0</span>
                                <span className="text-sm text-cream-dark/60 uppercase tracking-wide">Shortcuts</span>
                            </div>
                        </div>
                    </MotionDiv>
                </div>
            </div>
        </section>
    );
};

export default Story;
