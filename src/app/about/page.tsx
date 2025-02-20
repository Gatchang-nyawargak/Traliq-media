"use client";

import { useEffect, useState, useMemo } from "react";
import { FaUsers, FaRegHandshake, FaCog, FaHourglassStart } from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    hours: 0,
    workers: 0
  });

  const targetCounts = useMemo(() => ({
    clients: 232,
    projects: 521,
    hours: 1453,
    workers: 32
  }), []);

  useEffect(() => {
    window.scrollTo(0, 0);

    const steps = 60; // Number of animation steps
    let frame = 0;
    let animationFrameId: number;

    const animate = () => {
      frame++;
      setCounts(prevCounts => ({
        clients: Math.min(prevCounts.clients + Math.ceil(targetCounts.clients / steps), targetCounts.clients),
        projects: Math.min(prevCounts.projects + Math.ceil(targetCounts.projects / steps), targetCounts.projects),
        hours: Math.min(prevCounts.hours + Math.ceil(targetCounts.hours / steps), targetCounts.hours),
        workers: Math.min(prevCounts.workers + Math.ceil(targetCounts.workers / steps), targetCounts.workers)
      }));

      if (frame < steps) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [targetCounts]); // Now includes targetCounts as a dependency

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-24 text-center bg-blue-100 rounded-lg shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 animate-fade-in text-blue-700">About Us</h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl leading-relaxed mb-8 animate-fade-in-delayed text-gray-700">
            At Traliq Media, we believe in the power of connection—between creators and brands, businesses and audiences, and between innovation and growth. We operate across Rwanda, Kenya, and Ethiopia, bridging the gap between businesses and creators who can elevate their brand stories.
          </p>
        </div>
      </section>

      <main className="container mx-auto py-16 px-4">
        {/* Statistics Section */}
        <section className="mb-24 text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-16">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <FaUsers />, count: counts.clients, label: "Happy Clients" },
              { icon: <FaCog />, count: counts.projects, label: "Projects Completed" },
              { icon: <FaHourglassStart />, count: counts.hours, label: "Hours of Support" },
              { icon: <FaRegHandshake />, count: counts.workers, label: "Hard Workers" }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex flex-col items-center justify-center shadow-lg">
                  <div className="text-white text-5xl mb-2">{stat.icon}</div>
                  <span className="text-6xl font-bold text-white mb-2">{stat.count.toLocaleString()}</span>
                  <span className="text-white text-xl font-semibold">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
