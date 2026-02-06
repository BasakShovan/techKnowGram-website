import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* হেডার সেকশন */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Get in Touch</h1>
          <p className="text-black-600 mt-4">Ready to make a difference? Contact us to learn more about our programs or get involved.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* বাম পাশ: ইনফরমেশন কার্ডস */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600"><FaMapMarkerAlt size={24}/></div>
              <div>
                <h3 className="font-bold text-lg">Address</h3>
                <p className="text-black-600 text-sm mt-1">Suite 6B, House 8A/10, Doreen Tower, Dhanmondi, Dhaka, BANGLADESH</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-1000"><FaPhoneAlt size={20}/></div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-600 text-sm">+8802 2233 11511</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600"><FaEnvelope size={20}/></div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-black-600 text-sm">info@example.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600"><FaClock size={24}/></div>
              <div>
                <h3 className="font-bold text-lg">Office Hours</h3>
                <p className="text-black-600 text-sm">Sunday to Thursday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* ডান পাশ: কন্টাক্ট ফর্ম */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg focus:outline-blue-500" />
                <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg focus:outline-blue-500" />
              </div>
              <input type="text" placeholder="Subject" className="w-full p-3 border rounded-lg focus:outline-blue-500" />
              <textarea placeholder="Your Message" rows="5" className="w-full p-3 border rounded-lg focus:outline-blue-500"></textarea>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold flex items-center justify-center space-x-2 hover:bg-indigo-700 transition">
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;