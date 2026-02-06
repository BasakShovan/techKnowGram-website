import React from 'react';
import ceo from '../assets/AKM AHMEDUL ISLAM BABU.png';
import chair from '../assets/chair.jpg';
import zinat from '../assets/zinat.jpg';

// আপনার ছবিগুলো এখানে ইমপোর্ট করুন
// import ceoImage from '../assets/ceo.png';
// import member1 from '../assets/member1.png';

const AboutPage = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <p className="text-gray-700 leading-relaxed text-justify">
            TechKnowGram a leading technology company based in Bangladesh, specializes in providing customized web and embedded solutions across various domains, including ERP, AI, IoT, ML Data Analytics,Robotics, AR, VR Applications, Gaming, and Animation. Renowned globally for its expertise in the USA, EU & Japanese ICT market, where it has been active for over 25 years with combined professional experience. With over 25 years of combined professional experience, the company’s team is committed to delivering innovative solutions to clients. TechKnowGram Limited is proud to hold ISO 9001, ISO 14001, and ISO/IEC 27001certifications and is a member of several esteemed organizations, including the Federation of Chambers of Commerce and Industries (FBCCI), Bangladesh Association of Software and Information Services (BASIS), the Bangladesh and Japan Chamber of Commerce & Industries (JBCCI), Bangladesh Computer Samity (BCS), the Bangladesh Association of Call Centers and Outsourcing (BACCO), the Ecommerce Association of Bangladesh (e-CAB), the CTO Forum of Bangladesh, and the She Trades Commonwealth Program by the International Trade Centre of International Trade Center (ITC).
          </p>
        </div>
        <div className="text-center mb-20">
          <img 
            src={ceo} 
            alt="CEO" 
            className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-gray-100"
          />
          <h2 className="text-2xl font-bold uppercase">AKM Ahmedul Islam BABU</h2>
          <p className="text-blue-600 font-semibold mb-4">Founder & CEO</p>
          <p className="text-gray-700 text-justify max-w-4xl mx-auto">
            AKM Ahmedul Islam BABU is the Founder, Managing Director, and CEO of TechKnowGram Ltd and Sobjanta AI, boasting over 28 years of experience in BPO, outsourcing, and the software industry across the USA and Japanese markets. As an ICT pioneer, he has held prominent roles at multinational companies such as NIIT, Metrocomia South Asia, BJIT, SeBPO, Divine IT, and AtomAP. Since 1997, he has been actively involved with the Bangladesh Association of Software and Information Services (BASIS),
             where he served as Director and currently leads the BASIS Japan Desk, a position he created in 2016. He has also been a Director at the Bangladesh Association of Contact Center and Outsourcing BACCO.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">TechKnowGram Leading Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <img src={chair} alt="Sahera Islam" className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="font-bold text-lg">Sahera Islam</h3>
              <p className="text-gray-500 text-sm italic">Chairman</p>
            </div>

            {/* মেম্বার কার্ড - ২ */}
            <div className="text-center">
              <img src={ceo} alt="MD" className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="font-bold text-lg">AKM Ahmedul Islam</h3>
              <p className="text-gray-500 text-sm italic">Managing Director & CEO</p>
            </div>

            {/* মেম্বার কার্ড - ৩ */}
            <div className="text-center">
              <img src={zinat}
               alt="Director" className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="font-bold text-lg">Zinat Humaira Khanam</h3>
              <p className="text-gray-500 text-sm italic">Director</p>
            </div>

            {/* বাকি মেম্বারদের জন্য একই ভাবে ডিভ যোগ করুন */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;