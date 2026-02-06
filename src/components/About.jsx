import React from 'react';

import about11 from '../assets/about11.jpg';
import about12 from '../assets/about12.jpg';
import about21 from '../assets/about21.jpg';
import about22 from '../assets/about22.jpg';

const About = () => {
  return (
    // এখানে id="about-section" এবং scroll-mt-24 যোগ করা হয়েছে
    <section 
      id="about-section" 
      className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white scroll-mt-24"
    >
      
      {/* Left Image Grid */}
      <div className="relative grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <img src={about11} className="rounded-3xl shadow-md w-full object-cover h-48" alt="About 1" />
          <img src={about21} className="rounded-2xl shadow-md w-full object-cover h-64" alt="About 3" />
        </div>
        <div className="space-y-4 pt-12">
          <img src={about12} className="rounded-2xl shadow-md w-full object-cover h-64" alt="About 2" />
          <img src={about22} className="rounded-2xl shadow-md w-full object-cover h-56" alt="About 4" />
        </div>
      </div>

      {/* Right Content & Statistics */}
      <div className="space-y-6 text-left">
        <div>
          <span className="text-gray-500 font-medium text-sm">About Us</span>
          <h2 className="text-4xl font-bold leading-tight mt-1 text-gray-900">
            TechKnowGram a leading technology company based in Bangladesh
          </h2>
        </div>
        
        <p className="text-black text-sm leading-relaxed text-justify">
          TechKnowGram specializes in providing customized web and embedded solutions across various domains, 
          including ERP, AI, IoT, ML Data Analytics, Robotics, AR, VR Applications, Gaming, and Animation.
        </p>
        
        <div className="flex gap-4">
          <button className="border border-gray-300 px-5 py-2 rounded-full text-xs font-semibold hover:bg-gray-100 transition">
            📥 Brochure
          </button>
          <button className="border border-gray-300 px-5 py-2 rounded-full text-xs font-semibold hover:bg-gray-100 transition">
            📥 Portfolio
          </button>
        </div>

        {/* Statistics Box */}
        <div className="grid grid-cols-3 gap-4 pt-8">
          <div className="border border-gray-200 p-5 rounded-2xl text-center shadow-sm">
            <p className="text-gray-400 text-[10px] uppercase font-bold">Clients</p>
            <h3 className="text-3xl font-black text-gray-800">100+</h3>
          </div>
          <div className="border border-gray-200 p-5 rounded-2xl text-center shadow-sm">
            <p className="text-gray-400 text-[10px] uppercase font-bold">Projects</p>
            <h3 className="text-3xl font-black text-gray-800">120+</h3>
          </div>
          <div className="border border-gray-200 p-5 rounded-2xl text-center shadow-sm">
            <p className="text-gray-400 text-[10px] uppercase font-bold">Employees</p>
            <h3 className="text-3xl font-black text-gray-800">55+</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;