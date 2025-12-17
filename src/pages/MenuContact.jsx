import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Plus } from 'lucide-react';
import { FLAVORS } from '../constants';
import Modal from '../components/Modal';

const MotionDiv = motion.div;

const MenuContact = () => {
    const [selectedFlavor, setSelectedFlavor] = useState(null);
    return (
        <div className="pt-24 min-h-screen bg-cream">

            {/* --- Menu Section --- */}
            <section className="py-16 px-4 container mx-auto">
                <div className="text-center mb-16">
                    <span className="text-brand-pink font-bold tracking-widest text-sm uppercase mb-2 block">Indulge</span>
                    <h1 className="font-serif text-5xl md:text-6xl text-brand-dark mb-6">Our Menu</h1>
                    <p className="font-sans text-cream-dark/60 max-w-xl mx-auto text-lg">
                        Handcrafted daily using premium ingredients. Scoops, sundaes, and pure happiness.
                    </p>
                </div>

                <div className="mb-20">
                    <h2 className="font-serif text-3xl text-brand-ocean mb-8 border-b border-brand-ocean/20 pb-4 inline-block">Signature Flavors</h2>

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
                                </div>
                            </div>
                        </div>
                    )}
                </Modal>

                {/* Special Desserts Section */}
                <div className="mb-20">
                    <h2 className="font-serif text-3xl text-brand-sun mb-8 border-b border-brand-sun/20 pb-4 inline-block">Special Desserts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Dessert 1 */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition-shadow border border-brand-light">
                            <h3 className="font-serif text-2xl font-bold text-brand-dark mb-2">The Burj Sundae</h3>
                            <p className="text-cream-dark/70 text-sm mb-4">Three scoops of your choice, chocolate fudge, gold flakes, and fresh berries.</p>
                        </div>
                        {/* Dessert 2 */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition-shadow border border-brand-light">
                            <h3 className="font-serif text-2xl font-bold text-brand-dark mb-2">Saffron & Rose Float</h3>
                            <p className="text-cream-dark/70 text-sm mb-4">Local saffron ice cream floating in rose-infused chilled milk with pistachios.</p>
                        </div>
                        {/* Dessert 3 */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition-shadow border border-brand-light">
                            <h3 className="font-serif text-2xl font-bold text-brand-dark mb-2">Waffle Tower</h3>
                            <p className="text-cream-dark/70 text-sm mb-4">Freshly baked Belgian waffle topped with vanilla bean scoop and maple drizzle.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Contact & Location Section --- */}
            <section className="bg-brand-light py-20 px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 rounded-[3rem] overflow-hidden bg-white shadow-xl">

                        {/* Info Side */}
                        <div className="lg:w-1/3 p-10 md:p-14 bg-brand-pink text-white flex flex-col justify-center">
                            <h2 className="font-serif text-4xl mb-8">Visit Us</h2>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <MapPin className="mt-1 shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Our Location</h3>
                                        <p className="text-white/90">Shop No. 4, Naif<br />Deira<br />Dubai, UAE</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Clock className="mt-1 shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                                        <p className="text-white/90">Mon - Sun: 10:00 AM - 12:00 AM</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Phone className="mt-1 shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Contact</h3>
                                        <p className="text-white/90">+971 5660 48943</p>
                                        <p className="text-white/90">info@shamsalmoheet.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Side */}
                        <div className="lg:w-2/3 h-[400px] lg:h-auto relative">
                            <iframe
                                src="https://maps.google.com/maps?q=Naif,+Deira,+Dubai,+UAE&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default MenuContact;
