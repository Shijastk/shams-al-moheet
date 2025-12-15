import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Footer = () => {
    return (
        <footer id="footer" className="bg-cream pt-12 rounded-t-[3rem] mt-[-2rem] relative z-20 overflow-hidden">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }}>
            </div>

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl font-bold text-brand-pink">Shams Al Moheet.</h2>
                        <p className="text-cream-dark/70 text-sm leading-relaxed">
                            Premium artisanal ice cream in Dubai. Dedicated to quality, community, and the simple joy of dessert.
                        </p>
                        <div className="flex space-x-4 text-brand-pink">
                            <a href="#" className="hover:text-brand-dark transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-brand-dark transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-brand-dark transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Visit */}
                    <div>
                        <h3 className="font-serif text-lg font-bold text-brand-dark mb-4">Visit Us</h3>
                        <div className="space-y-2 text-cream-dark/70 text-sm">
                            <p>Shop No. 4, Naif</p>
                            <p>Deira, Dubai, UAE</p>
                            <p className="mt-4 font-semibold text-brand-pink">Hours</p>
                            <p>Mon - Sun: 10am - 12am</p>
                            <p className="mt-4 font-semibold text-brand-pink">Contact</p>
                            <p>info@shamsalmoheet.com</p>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-serif text-lg font-bold text-brand-dark mb-4">Explore</h3>
                        <ul className="space-y-2 text-cream-dark/70 text-sm">
                            <li><Link to="/menu-contact" className="hover:text-brand-pink transition-colors">Our Menu</Link></li>
                            <li><Link to="/#story" className="hover:text-brand-pink transition-colors">The Journey</Link></li>
                            <li><Link to="/menu-contact" className="hover:text-brand-pink transition-colors">Contact</Link></li>
                            <li><a href="#" className="hover:text-brand-pink transition-colors">Catering</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-serif text-lg font-bold text-brand-dark mb-4">Stay Sweet</h3>
                        <p className="text-cream-dark/70 text-sm mb-4">Join our list for exclusive seasonal drops.</p>
                        <div className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="px-4 py-3 rounded-xl bg-white border border-brand-light focus:outline-none focus:ring-2 focus:ring-brand-pink/50 text-sm"
                            />
                            <Button size="sm">Subscribe</Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-brand-light pt-8 text-center text-cream-dark/40 text-xs">
                    <p>&copy;2020 - {new Date().getFullYear()} Shams Al Moheet Ice Cream Shop L.L.C.All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
