import React from 'react';

import sobjantaImg from '../assets/sobjanta.png';
import erpImg from '../assets/erp.png';
import madeInBdImg from '../assets/made-in-bd.png';
import pathshalaImg from '../assets/pathshala.png';
import quizWinImg from '../assets/quizwin.png';
import prostutiImg from '../assets/prostuti.png';
import bmsImg from '../assets/bms.png';
import khozImg from '../assets/khoz.png';

const products = [
  { id: 1, title: 'Sobjanta.ai', desc: 'Sobjanta Is A Generative AI-Based Personal Assistant. It also known as a conversational AI or chatbot trained to be informative and comprehensive. It can able to communicate and generate human-like text in response to a wide range of prompts and questions.', img: sobjantaImg },
  { id: 2, title: 'TKG ERP', desc: 'TechknowGram Limited offers its own Enterprise Resource Planning solution called TKG ERP, which can be tailored to meet the unique needs of any business entity, including those in the Construction Industry, Education, Manufacturing, Workshops, and RMG industry. ', img: erpImg },
  { id: 3, title: 'MadeInBangladesh.info', desc: 'Aims to bridge the gap between local producers and international consumers with high-quality products.', img: madeInBdImg },
  { id: 4, title: 'Freelancing Pathshala', desc: 'Empowering freelancers by providing a robust platform where they can showcase their skills.', img: pathshalaImg },
  { id: 5, title: 'QuizWin', desc: 'An interactive quiz platform for knowledge enthusiasts offering a range of quiz events.', img: quizWinImg },
  { id: 6, title: 'Prostuti', desc: 'An exam management platform for institutes to administer exams effectively and efficiently.', img: prostutiImg },
  { id: 7, title: 'BMS', desc: 'Bridge Management System to optimize your journey with RHD by discovering excellence.', img: bmsImg },
  { id: 8, title: 'Khoz', desc: 'Revolutionizing indoor navigation with IoT technology for cutting-edge navigation systems.', img: khozImg },
];

const Products = () => {
  return (
    <section id="products-section" className="py-20 bg-white scroll-mt-24">
      <div className="text-center mb-16">
        <p className="text-gray-500 font-medium text-sm">Products</p>
        <h2 className="text-4xl font-extrabold text-black mt-2">Our Product for You</h2>
      </div>

      {/* প্রোডাক্ট গ্রিড */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-[32px] p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            {/* লোগো/ইমেজ এলাকা */}
            <div className="h-24 flex items-center justify-center mb-6">
              <img src={item.img} alt={item.title} className="max-h-full object-contain" />
            </div>

            {/* টেক্সট কন্টেন্ট */}
            <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
            <p className="text-black text-sm leading-relaxed mb-6 flex-grow text-center">
              {item.desc}
            </p>

            {/* বাটন */}
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;