"use client";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-4 text-blue-800">Contact</h2>
        <p className="text-lg text-center text-gray-700 mb-12">Reach out to us</p>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <div className="flex items-center gap-4 mb-6">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              <div>
                <h3 className="text-xl font-semibold text-blue-700">Address</h3>
                <a
                  href="https://www.google.com/maps/search/1+KN+78+Street,+Kigali,+Rwanda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  1 KN 78 Street, Kigali, Rwanda
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <FaPhone className="text-blue-600 text-2xl" />
              <div>
                <h3 className="text-xl font-semibold text-blue-700">Call Us</h3>
                <a
                  href="tel:+250789847975"
                  className="text-blue-500 hover:underline"
                >
                  +250 789 847 975
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <div>
                <h3 className="text-xl font-semibold text-blue-700">Email</h3>
                <a
                  href="mailto:contact@traliqmedia.com"
                  className="text-blue-500 hover:underline"
                >
                  contact@traliqmedia.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <form className="flex flex-col gap-4">
              <div className="flex items-center border border-gray-300 p-3 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                <FaUser className="text-gray-500 mr-3" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full focus:outline-none"
                />
              </div>

              <div className="flex items-center border border-gray-300 p-3 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                <FaEnvelope className="text-gray-500 mr-3" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full focus:outline-none"
                />
              </div>

              <div className="flex items-center border border-gray-300 p-3 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                <FaPaperPlane className="text-gray-500 mr-3" />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full focus:outline-none"
                />
              </div>

              <textarea
                placeholder="Message"
                rows={4}
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button className="bg-blue-600 text-white py-3 rounded-md text-lg font-medium shadow-md transition-all duration-300 hover:bg-blue-700 hover:scale-105 flex items-center justify-center gap-2">
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12 w-full h-72 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.0455444739253!2d30.058722676061446!3d-1.9512426491774948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7ba9f248fdf%3A0x8fd6ec367372f5c5!2sKN%2078%20St%2C%20Kigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1708430989054"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
