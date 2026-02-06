import React from 'react';
import p1 from '../assets/logo1.png';
import p2 from '../assets/logo2.png';
import p3 from '../assets/logo3.png';
import p4 from '../assets/logo4.png';
import p5 from '../assets/logo5.png';
import p6 from '../assets/logo6.png';
import p7 from '../assets/logo7.png';
import p8 from '../assets/logo8.png';
import p9 from '../assets/logo9.png';
import p10 from '../assets/logo10.png';
import p11 from '../assets/logo11.png';
import p12 from '../assets/logo12.png';
import p13 from '../assets/logo13.png';
import p14 from '../assets/logo14.png';
import p15 from '../assets/logo15.png';
import p16 from '../assets/logo16.png';

const Partners = () => {
  return (
    <section id="partners-section" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-tight">
            Our Client & Partners
          </h2>
       
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          <div className="border border-gray-200 p-6 h-40 flex items-center justify-center bg-white">
            <img src={p1} alt="Partner 1" className="max-h-full object-contain" />
          </div>

          {/* লোগো ২ */}
          <div className="border border-gray-200 p-6 h-40 flex items-center justify-center bg-white">
            <img src={p2} alt="Partner 2" className="max-h-full object-contain" />
          </div>

          {/* লোগো ৩ */}
          <div className="border border-gray-200 p-6 h-40 flex items-center justify-center bg-white">
            <img src={p3} alt="Partner 3" className="max-h-full object-contain" />
          </div>

          {/* লোগো ৪ */}
          <div className="border border-gray-200 p-6 h-40 flex items-center justify-center bg-white">
            <img src={p4} alt="Partner 4" className="max-h-full object-contain" />
          </div>

          {/* লোগো ৫ */}
          <div className="border border-gray-200 p-6 h-40 flex items-center justify-center bg-white">
            <img src={p5} alt="Partner 5" className="max-h-full object-contain" />
          </div>

          {/* লোগো ৬ */}
          <div className="border border-gray-200 p-6 h-40 flex items-center justify-center bg-white">
            <img src={p6} alt="Partner 6" className="max-h-full object-contain" />
          </div>

          {/* লোগো ৭ */}
          <div className="border border-gray-200 p-6 h-40 flex items-center justify-center bg-white">
            <img src={p13} alt="Partner 7" className="max-h-full object-contain" />
          </div>

          {/* লোগো ৮ */}
          <div className="border border-gray-200 p-6 h-40 flex items-center justify-center bg-white">
            <img src={p8} alt="Partner 8" className="max-h-full object-contain" />
          </div>

          {/* লোগো ৯ */}
          <div className="border border-gray-200 p-6 h-40 flex items-center justify-center bg-white">
            <img src={p9} alt="Partner 9" className="max-h-full object-contain" />
          </div>

          {/* লোগো ১০ */}
          <div className="border border-gray-200 p-6 h-40 flex items-center justify-center bg-white">
            <img src={p10} alt="Partner 10" className="max-h-full object-contain" />
          </div>

          {/* লোগো ১১ */}
          <div className="border border-gray-200 p-6 h-40 flex items-center justify-center bg-white">
            <img src={p11} alt="Partner 11" className="max-h-full object-contain" />
          </div>

          {/* লোগো ১২ */}
          <div className="border border-gray-200 p-6 h-40 flex items-center justify-center bg-white">
            <img src={p12} alt="Partner 12" className="max-h-full object-contain" />
          </div>

          {/* লোগো ১৩ */}
          <div className="border border-gray-200 p-6 h-40 flex items-center justify-center bg-white">
            <img src={p13} alt="Partner 13" className="max-h-full object-contain" />
          </div>

          {/* লোগো ১৪ */}
          <div className="border border-gray-200 p-6 h-40 flex items-center justify-center bg-white">
            <img src={p14} alt="Partner 14" className="max-h-full object-contain" />
          </div>

          {/* লোগো ১৫ */}
          <div className="border border-gray-200 p-6 h-40 flex items-center justify-center bg-white">
            <img src={p15} alt="Partner 15" className="max-h-full object-contain" />
          </div>

          {/* লোগো ১৬ */}
          <div className="border border-gray-200 p-6 h-40 flex items-center justify-center bg-white">
            <img src={p16} alt="Partner 16" className="max-h-full object-contain" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partners;