import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Store, Beaker, Users } from 'lucide-react';

const services = [
    {
        icon: PartyPopper,
        title: "Events & Catering",
        description: "Elevate your weddings and corporate gatherings with our vintage ice cream cart service."
    },
    {
        icon: Store,
        title: "Wholesale",
        description: "Partner with us to serve Shams Al Moheet at your restaurant, cafe, or boutique hotel."
    },
    {
        icon: Beaker,
        title: "Custom Flavors",
        description: "Collaborate with our chefs to create a bespoke flavor exclusive to your brand."
    },
    {
        icon: Users,
        title: "Workshops",
        description: "Team building experiences where you learn the science and art of ice cream making."
    }
];

const MotionDiv = motion.div;

const Services = () => {
    return (
        <section className="py-24 bg-brand-light">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl text-brand-dark mb-4">Beyond the Scoop</h2>
                    <p className="text-cream-dark/60 max-w-2xl mx-auto">Bringing the Shams Al Moheet experience to your special moments.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <MotionDiv
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-300 text-center group"
                        >
                            <div className="w-16 h-16 mx-auto bg-brand-light rounded-2xl flex items-center justify-center text-brand-pink mb-6 group-hover:scale-110 transition-transform duration-300">
                                <service.icon size={32} />
                            </div>
                            <h3 className="font-serif text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
                            <p className="font-sans text-sm text-cream-dark/60 leading-relaxed">
                                {service.description}
                            </p>
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
