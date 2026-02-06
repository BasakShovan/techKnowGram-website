import React from 'react';
import Partners from '../components/Partners'; // আপনার আগের তৈরি করা কম্পোনেন্ট

const PartnersPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-white"> 
      {/* pt-20 দেওয়া হয়েছে যাতে নববারের নিচে ঢাকা না পড়ে */}
      <Partners />
      
      {/* আপনি চাইলে এখানে পার্টনারদের সম্পর্কে আরও কিছু লেখা যোগ করতে পারেন */}
      <div className="max-w-6xl mx-auto px-6 pb-20 text-center">
      </div>
    </div>
  );
};

export default PartnersPage;