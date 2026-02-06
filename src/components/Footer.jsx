import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
     
        <div className="space-y-4">
          <div className="text-2xl font-black tracking-tighter text-blue-900">
            TECH<span className="text-blue-600">KNOW</span>GRAM
          </div>
          <p className="text-black text-sm leading-relaxed text-justify">
            TechKnowGram a leading technology company based in Bangladesh, specializes in providing customized web and embedded solutions across various domains.
          </p>
        </div>

    
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🇧🇩</span>
            <h3 className="font-bold text-black text-base">TechKnowGram Ltd.</h3>
          </div>
          <p className="text-black text-sm flex gap-2">
            <span className="font-bold text-blue-600">📍</span>
            Suite 6B, House 8A/10, Doreen Tower, Road 13, Dhanmondi, Dhaka 1209, BANGLADESH
          </p>
        </div>

       
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🇯🇵</span>
              <h3 className="font-bold text-black text-base">合同会社TechKnowGram</h3>
            </div>
            <p className="text-black text-sm flex gap-2">
              <span className="font-bold text-blue-600">📍</span>
              Oyamadai, Setagaya-ku, Tokyo 1-10-4, JAPAN
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🇺🇸</span>
              <h3 className="font-bold text-black text-base">TechKnowGram LLC</h3>
            </div>
            <p className="text-black text-sm flex gap-2">
              <span className="font-bold text-blue-600">📍</span>
              1209 Mountain Road PL NE, STE R, Albuquerque, NM 87110, USA
            </p>
          </div>
        </div>

      
        <div className="space-y-4">
          <h3 className="font-bold text-black text-base">Contact Us</h3>
          <ul className="space-y-3 text-sm text-black">
            <li className="flex items-center gap-3">
              <span className="text-blue-600">📞</span> +8802 2233 11511
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-600">💬</span> +880 1819-250309
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-500">✉️</span> info@techknowgram.com
            </li>
          </ul>
          
 
          <div className="flex gap-4 pt-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-all text-lg font-bold">in</a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-blue-400 hover:text-white transition-all text-lg font-bold">t</a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-blue-700 hover:text-white transition-all text-lg font-bold">f</a>
          </div>
        </div>
      </div>

    
      <div className="mt-16 pt-8 border-t border-gray-100 text-center">
  <p className="text-[10px] md:text-xs text-black-500 font-normal tracking-wide">
    Copyright © TechKnowGram. All rights reserved.
  </p>
</div>
    </footer>
  );
};

export default Footer;