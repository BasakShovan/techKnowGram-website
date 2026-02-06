import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../assets/logo.jpg'; 

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Client & Partners', link: '/partners' },
    { name: 'Products & Services', link: '/products' },
  ];

  return (
    <nav className="fixed w-full h-20 bg-white shadow-md z-[100]">
      <div className="flex justify-between items-center w-full h-full px-6 lg:px-16">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img src={LogoImg} alt="Logo" className="h-12 md:h-16 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center">
          {navLinks.map((item, index) => (
            <li key={index} className="ml-8 text-sm uppercase font-semibold hover:text-blue-600 transition-colors">
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}

          {/* Dropdown Menu: News & Gallery */}
          <li className="relative ml-8 text-sm uppercase font-semibold cursor-pointer group h-full flex items-center">
            <div className="flex items-center group-hover:text-blue-600 transition-all">
              News & Gallery
              <svg className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Dropdown Box */}
            <div className="absolute left-0 top-full pt-2 hidden group-hover:block transition-all duration-300">
              <ul className="w-48 bg-white shadow-xl border border-gray-100 py-3 rounded-sm">
                <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <Link to="/news" className="block w-full h-full capitalize">Latest News</Link>
                </li>
                <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <Link to="/gallery" className="block w-full h-full capitalize">Photo Gallery</Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="ml-8 text-sm uppercase font-semibold hover:text-blue-600">
            <Link to="/jobs">Jobs</Link>
          </li>

          {/* Added Contact Link */}
          <li className="ml-8 text-sm uppercase font-semibold hover:text-blue-600">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div onClick={() => setNav(!nav)} className="md:hidden cursor-pointer">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={nav ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={nav ? "fixed left-0 top-0 w-[70%] h-screen bg-white p-10 ease-in duration-500 shadow-xl" : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
          <div className="flex w-full items-center justify-between border-b pb-4">
            <img src={LogoImg} alt="Logo" className="h-10 w-auto" />
            <div onClick={() => setNav(false)} className="cursor-pointer text-2xl">✕</div>
          </div>
          <div className="py-8 flex flex-col">
            <ul className="uppercase font-semibold">
              {navLinks.map((item, index) => (
                <Link key={index} to={item.link} onClick={() => setNav(false)}>
                  <li className="py-4 text-sm border-b border-gray-100">{item.name}</li>
                </Link>
              ))}
              <Link to="/news" onClick={() => setNav(false)}>
                <li className="py-4 text-sm border-b border-gray-100">News</li>
              </Link>
              <Link to="/gallery" onClick={() => setNav(false)}>
                <li className="py-4 text-sm border-b border-gray-100">Gallery</li>
              </Link>
              <Link to="/jobs" onClick={() => setNav(false)}>
                <li className="py-4 text-sm border-b border-gray-100">Jobs</li>
              </Link>
              <Link to="/contact" onClick={() => setNav(false)}>
                <li className="py-4 text-sm border-b border-gray-100">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;