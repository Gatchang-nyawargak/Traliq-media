"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaUser, FaPen, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Contact Us</h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl leading-relaxed animate-fade-in-delayed">
            Have questions? We’re here to help. Reach out to us and let&apos;s connect!
          </p>
        </div>
      </section>

      <main className="container mx-auto py-16 px-4">
        {/* Contact Information */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <FaMapMarkerAlt className="text-4xl text-blue-500" />,
              title: "Our Location",
              content: "123 Digital Avenue, Kigali, Rwanda",
            },
            {
              icon: <FaPhone className="text-4xl text-blue-500" />,
              title: "Call Us",
              content: <a href="tel:+250123456789" className="text-blue-600 hover:underline">+250 123 456 789</a>,
            },
            {
              icon: <FaEnvelope className="text-4xl text-blue-500" />,
              title: "Email",
              content: <a href="mailto:contact@traliqmedia.com" className="text-blue-600 hover:underline">hello@traliqmedia.com</a>,
            },
            {
              icon: <FaClock className="text-4xl text-blue-500" />,
              title: "Business Hours",
              content: "Mon - Fri: 9:00 AM - 6:00 PM",
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
              <div className="flex items-center justify-center mb-6 bg-blue-100 w-16 h-16 rounded-full mx-auto">
                {item.icon}
              </div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">{item.title}</h2>
              <p className="text-gray-700 text-center">{item.content}</p>
            </div>
          ))}
        </section>

        {/* Contact Form */}
        <section className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">Send Us a Message</h2>
          <form className="grid grid-cols-1 gap-6">
            <div className="relative">
              <FaUser className="absolute left-3 top-4 text-gray-500" />
              <input type="text" placeholder="Full Name" className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-4 text-gray-500" />
              <input type="email" placeholder="Email Address" className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="relative">
              <FaPen className="absolute left-3 top-4 text-gray-500" />
              <input type="text" placeholder="Subject" className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="relative">
              <FaPaperPlane className="absolute left-3 top-4 text-gray-500" />
              <textarea placeholder="Your Message" className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </section>

        {/* Google Map */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Find Us</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096674!2d144.95373531531772!3d-37.81627937975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce720!2sMelbourne%2C+Australia!5e0!3m2!1sen!2s!4v1632745417445!5m2!1sen!2s"
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
