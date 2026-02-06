import React from 'react';
import hero1 from '../assets/Hero11.jpg';
import hero2 from '../assets/hero12.jpg';
import hero3 from '../assets/hero 21.jpg';
import hero4 from '../assets/hero22.jpg';
import hrto4 from '../assets/hero22.jpg';

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div className="space-y-6">
        <h1 className="text-6xl font-bold text-gray-900">TechKnowGram</h1>
        <p className="text-black-600 text-base leading-relaxed text-justify">
          TechKnowGram a leading technology company based in Bangladesh, specializes in providing customized web and embedded solutions across various domains, including ERP, AI, IoT, ML Data Analytics,Robotics, AR, VR Applications, Gaming, and Animation. Renowned globally for its expertise in the USA, EU & Japanese ICT market, where it has been active for over 25 years with combined professional experience. With over 25 years of combined professional experience, the company’s team is committed to delivering innovative solutions to clients. TechKnowGram Limited is proud to hold ISO 9001, ISO 14001, and ISO/IEC 27001certifications and is a member of several esteemed organizations, including the Federation of Chambers of Commerce and Industries (FBCCI), Bangladesh Association of Software and Information Services (BASIS), the Bangladesh and Japan Chamber of Commerce & Industries (JBCCI), Bangladesh Computer Samity (BCS), the Bangladesh Association of Call Centers and Outsourcing (BACCO), the Ecommerce Association of Bangladesh (e-CAB), the CTO Forum of Bangladesh, and the She Trades Commonwealth Program by the International Trade Centre of International Trade Center (ITC).
        </p>
        <button className="flex items-center space-x-2 border border-gray-400 px-6 py-2 rounded-full hover:bg-black hover:text-white transition group">
          <span>See More</span> <span className="group-hover:translate-x-1">→</span>
        </button>
      </div>

      {/* Right Image Grid (Zig-zag style) */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
        <img src={hero1} className="rounded-2xl shadow-lg w-full h-48 object-cover" alt="Meeting" />
          <img src={hero3} className="rounded-3xl shadow-lg w-full h-64 object-cover" alt="Service Icons" />
        </div>
        <div className="space-y-4 pt-12">
          <img src={hero2} className="rounded-3xl shadow-lg w-full h-64 object-cover" alt="Sobjanta AI" />
          <img src={hero4} className="rounded-3xl shadow-lg w-full h-56 object-cover" alt="AI Robot" />
        </div>
      </div>
    </section>
  );
};

export default Hero;