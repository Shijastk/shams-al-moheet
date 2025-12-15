import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { FLAVORS } from '../constants';
import Modal from './Modal';
import Button from './Button';

const MotionDiv = motion.div;

const FlavorLibrary = () => {
    const [selectedFlavor, setSelectedFlavor] = useState(null);

    return (
        <section id="flavors" className="py-24 mt-[-85px] bg-cream relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#BE123C 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl text-brand-pink mb-4">The Flavor Library</h2>
                    <p className="font-sans text-brand-dark/60">Discover our signature churns, crafted with passion.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FLAVORS.map((flavor, index) => (
                        <MotionDiv
                            key={flavor.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedFlavor(flavor)}
                        >
                            <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-sm mb-4 bg-white border border-brand-light">
                                <img
                                    src={flavor.image}
                                    alt={flavor.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <Plus className="text-brand-pink" size={20} />
                                </div>
                            </div>
                            <h3 className="text-center font-serif text-2xl text-cream-dark group-hover:text-brand-pink transition-colors">{flavor.name}</h3>
                        </MotionDiv>
                    ))}
                </div>
            </div>

            {/* Flavor Detail Modal */}
            <Modal isOpen={!!selectedFlavor} onClose={() => setSelectedFlavor(null)}>
                {selectedFlavor && (
                    <div className="flex flex-col md:flex-row h-full">
                        <div className="w-full md:w-1/2 h-64 md:h-auto">
                            <img
                                src={selectedFlavor.image}
                                alt={selectedFlavor.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className={`w-full md:w-1/2 p-8 md:p-12 ${selectedFlavor.color} flex flex-col justify-center`}>
                            <h3 className="font-serif text-4xl font-bold text-cream-dark mb-4">{selectedFlavor.name}</h3>
                            <p className="font-sans text-cream-dark/80 text-lg mb-8 leading-relaxed">
                                {selectedFlavor.description}
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-serif text-brand-pink font-bold mb-2">Key Ingredients</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedFlavor.ingredients.map((ing, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/50 rounded-full text-sm text-cream-dark border border-white">
                                                {ing}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-serif text-brand-pink font-bold mb-2">Perfect Pairing</h4>
                                    <p className="font-sans text-cream-dark/80">{selectedFlavor.pairing}</p>
                                </div>

                                {/* Removed Order Button as requested */}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default FlavorLibrary;
