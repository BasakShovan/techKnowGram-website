import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home'; 
import AboutPage from './pages/AboutPage'; 
import PartnersPage from './pages/PartnersPage';
import ProductsPage from './pages/ProductsPage';
import Jobs from './pages/Jobs';
import NewsPage from './pages/NewsPage'; 
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;