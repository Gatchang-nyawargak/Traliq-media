"use client";
import React from "react";
import { MdFacebook } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneAlt as Phone } from "react-icons/fa";
import { HiOutlineMail as Mail } from "react-icons/hi";
import Link from "next/link";

const Footer = () => {
  const handleScroll = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-blue-500 text-white py-10 px-5 font-sans">
      <div id="contacts" className="flex flex-wrap justify-between items-start mb-10">
        {/* Contact Section */}
        <div className="flex flex-col items-start mb-6 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <h3 className="mb-4 text-lg font-bold text-[26px]">Traliq Media</h3>
          <div className="flex flex-col items-start space-y-4">
            {/* Address */}
            <div className="flex flex-col space-y-2">
              <p className="text-white">
                1 KN 78 Street, Kigali, Rwanda
              </p>
            </div>
            {/* Phone */}
            <div className="flex flex-col space-y-2">
              <a
                href="tel:+250789847975"
                className="flex items-center space-x-2 text-white hover:text-gray-400"
              >
                <Phone size={20} />
                <span>+250 789 847 975</span>
              </a>
            </div>
            {/* Email */}
            <a
              href="mailto:contact@traliqmedia.com"
              className="flex items-center space-x-2 text-white hover:text-gray-400"
            >
              <Mail size={20} />
              <span>hello@traliqmedia.com</span>
            </a>
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="flex flex-col items-start mb-6 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <h3 className="mb-4 text-lg font-bold text-[26px]">Useful Links</h3>
          <ul className="space-y-1">
            <li>
              <Link
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("home");
                }}
                className="text-white hover:text-gray-400 text-[20px]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("contact");
                }}
                className="text-white hover:text-gray-400 text-[20px]"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("about");
                }}
                className="text-white hover:text-gray-400 text-[20px]"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col items-start mb-6 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <h3 className="mb-4 text-lg font-bold text-[26px]">Our Newsletter</h3>
          <p className="text-white text-[14px] mb-4">
            Subscribe to our newsletter and receive the latest news about our products and services!
          </p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-purple-700 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-start mb-6 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <h3 className="mb-4 text-lg font-bold text-[26px]">Follow Us</h3>
          <div className="flex justify-center gap-3 mt-2">
            <Link href="https://www.facebook.com" aria-label="Facebook" passHref>
              <MdFacebook className="text-xl sm:text-2xl text-white hover:text-gray-400" />
            </Link>
            <Link href="https://www.twitter.com" aria-label="Twitter" passHref>
              <BsTwitter className="text-xl sm:text-2xl text-white hover:text-gray-400" />
            </Link>
            <Link href="https://www.instagram.com" aria-label="Instagram" passHref>
              <AiFillInstagram className="text-xl sm:text-2xl text-white hover:text-gray-400" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t-2 border-white pt-2 mb-2 text-center relative">
        <p className="text-sm text-white absolute left-1/2 transform -translate-x-1/2 w-full">
          &copy; 2025 Traliq Media. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
