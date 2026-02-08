import React from 'react';
import LogoImg from '../assets/logo.jpg'; 

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* ১. লোগো ও বর্ণনা */}
        <div className="space-y-4">
          <img src={LogoImg} alt="Logo" className="h-12 w-auto" />
          <p className="text-black text-sm leading-relaxed text-justify">
            TechKnowGram a leading technology company based in Bangladesh, specializes in providing customized web and embedded solutions across various domains.
          </p>
        </div>

        {/* ২. বাংলাদেশ অফিস */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-base font-bold text-black">
            <img src="https://flagcdn.com/w40/bd.png" alt="BD" className="w-5 shadow-sm" />
            <h3>TechKnowGram Ltd.</h3>
          </div>
          <div className="flex gap-2 text-sm text-black">
            {/* Map Pin Unicode */}
            <span className="text-blue-600 font-bold">{'\uD83D\uDCCD'}</span>
            <p>Suite 6B, House 8A/10, Doreen Tower, Road 13, Dhanmondi, Dhaka 1209, BANGLADESH</p>
          </div>
        </div>

        {/* ৩. জাপান অফিস */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-base font-bold text-black">
            <img src="https://flagcdn.com/w40/jp.png" alt="JP" className="w-5 shadow-sm" />
            <h3>合同会社TechKnowGram</h3>
          </div>
          <div className="flex gap-2 text-sm text-black">
            <span className="text-blue-600 font-bold">{'\uD83D\uDCCD'}</span>
            <p>Oyamadai, Setagaya-ku, Tokyo 1-10-4, JAPAN</p>
          </div>
        </div>

        {/* ৪. ইউএসএ অফিস */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-base font-bold text-black">
            <img src="https://flagcdn.com/w40/us.png" alt="US" className="w-5 shadow-sm" />
            <h3>TechKnowGram LLC</h3>
          </div>
          <div className="flex gap-2 text-sm text-black">
            <span className="text-blue-600 font-bold">{'\uD83D\uDCCD'}</span>
            <p>1209 Mountain Road PL NE, STE R, Albuquerque, NM 87110, USA</p>
          </div>
        </div>

        {/* ৫. কন্টাক্ট ইনফো */}
        <div className="space-y-4">
          <h3 className="font-bold text-base text-black">Contact Us</h3>
          <ul className="space-y-3 text-sm text-black">
            <li className="flex items-center gap-3">
              <span className="text-blue-600">{'\uD83D\uDCDE'}</span> +8802 2233 11511
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-600">{'\uD83D\uDDEAC'}</span> +880 1819-250309
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-500">{'\u2709\uFE0F'}</span> info@techknowgram.com
            </li>
          </ul>
          
          <div className="flex gap-4 pt-4">
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-all text-sm font-bold text-black">in</a>
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full hover:bg-black hover:text-white transition-all text-sm font-bold text-black">𝕏</a>
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full hover:bg-blue-700 hover:text-white transition-all text-sm font-bold text-black">f</a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-100 text-center text-xs text-black">
        Copyright © {new Date().getFullYear()} TechKnowGram. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;