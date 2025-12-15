import React from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MenuContact from './pages/MenuContact';
import ScrollToTop from './components/ScrollToTop'; // We need this to reset scroll on route change

const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-cream selection:bg-brand-pink selection:text-white">
                <ScrollToTop />
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu-contact" element={<MenuContact />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
};


export default App;
