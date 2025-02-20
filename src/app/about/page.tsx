"use client";

import { useEffect, useState } from "react";
import { FaUsers, FaRegHandshake, FaChartLine, FaTools, FaCog, FaHourglassStart } from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    hours: 0,
    workers: 0
  });

  const targetCounts = {
    clients: 232,
    projects: 521,
    hours: 1453,
    workers: 32
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const animate = () => {
      setCounts(prevCounts => ({
        clients: Math.min(prevCounts.clients + Math.ceil(targetCounts.clients / steps), targetCounts.clients),
        projects: Math.min(prevCounts.projects + Math.ceil(targetCounts.projects / steps), targetCounts.projects),
        hours: Math.min(prevCounts.hours + Math.ceil(targetCounts.hours / steps), targetCounts.hours),
        workers: Math.min(prevCounts.workers + Math.ceil(targetCounts.workers / steps), targetCounts.workers)
      }));
    };

    const timer = setInterval(animate, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-40"></div>
          {/* Abstract background patterns */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${Math.random() * 400 + 200}px`,
                  height: `${Math.random() * 400 + 200}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: 'white',
                  transform: `translate(-50%, -50%)`,
                  filter: 'blur(100px)'
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-8">
              About Us
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl leading-relaxed mb-8">
              At Traliq Media, we believe in the power of connection—between creators and brands, between businesses and their audiences, and between innovation and growth. We are a dynamic digital media platform operating across Rwanda, Kenya, and Ethiopia, committed to bridging the gap between businesses of all sizes and creators who can elevate their brand stories.
            </p>
            <div className="flex justify-center gap-4">
              <div className="px-6 py-3 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                <span className="font-bold">3</span> Countries
              </div>
              <div className="px-6 py-3 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                <span className="font-bold">1000+</span> Creators
              </div>
              <div className="px-6 py-3 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                <span className="font-bold">500+</span> Brands
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto py-16 px-4">
        {/* Mission, Vision, Values Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: <FaTools className="text-4xl text-blue-500" />,
              title: "Our Mission",
              content: "To empower creators while helping brands build authentic and influential connections with their target audience. We provide creators with the tools, resources, and opportunities to monetize their content effectively, all while offering businesses unparalleled access to a diverse and engaged market."
            },
            {
              icon: <FaRegHandshake className="text-4xl text-blue-500" />,
              title: "Our Vision",
              content: "Our vision is to become the leading digital platform in Africa for creators and businesses, unlocking endless possibilities for collaboration, creativity, and growth. By championing creators and driving innovation in digital marketing, we aim to transform how brands communicate and engage with audiences across the continent."
            },
            {
              icon: <FaChartLine className="text-4xl text-blue-500" />,
              title: "Our Values",
              content: "Integrity, creativity, and excellence are at the heart of everything we do. We value long-lasting relationships, transparency, and continuous improvement in all our endeavors."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
              <div className="flex items-center justify-center mb-6 bg-blue-100 w-16 h-16 rounded-full mx-auto">
                {item.icon}
              </div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">{item.title}</h2>
              <p className="text-gray-700 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </section>

        {/* Statistics Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-blue-600 text-center mb-16">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <FaUsers />, count: counts.clients, label: "Happy Clients" },
              { icon: <FaCog />, count: counts.projects, label: "Projects Completed" },
              { icon: <FaHourglassStart />, count: counts.hours, label: "Hours of Support" },
              { icon: <FaRegHandshake />, count: counts.workers, label: "Hard Workers" }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-110 hover:from-blue-600 hover:to-blue-700 group">
                  <div className="text-white text-3xl mb-2">{stat.icon}</div>
                  <span className="text-4xl font-bold text-white mb-2">{stat.count.toLocaleString()}</span>
                  <span className="text-white text-lg">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Statement */}
        <section className="text-center mb-16">
          <p className="text-2xl text-gray-700 font-light italic">
            At Traliq Media, we&apos;re not just creating campaigns—we&apos;re creating connections that matter.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
