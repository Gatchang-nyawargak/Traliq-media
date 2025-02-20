"use client";
import { FaUsers, FaChartLine, FaHandshake, FaShoppingCart } from "react-icons/fa";

const ValueProposition = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100 text-gray-900">
      <div className="container mx-auto text-center px-6 lg:px-20">
        {/* Title and Subtitle */}
        <h2 className="text-4xl font-bold mb-4 tracking-tight text-blue-800">
          What We Do
        </h2>
        <p className="text-xl font-medium text-gray-700 mb-12">
          Connecting Visionaries, Amplifying Impact
        </p>

        {/* Description */}
        <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-700 mb-10">
        At <span className="font-semibold text-blue-700">Traliq Media</span>, we connect brands with the right creators 
          to produce innovative and effective marketing campaigns. Our platform enables brands to collaborate with influencers nano, 
          micro, macro, or celebrity who align with their vision and audience. Whether it’s driving brand awareness, lead generation, 
          or product promotion, we create measurable impact through authentic and creative storytelling.
        </p>

        {/* Key Features */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12 mb-16">
          {["Strategic Collaboration", "Authentic Engagement", "Localized Expertise"].map((item, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md transition-all duration-300 hover:bg-blue-700 hover:scale-105"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Value Proposition Grid */}
        <h3 className="text-3xl font-bold mb-8 text-blue-800">Our Unique Value Proposition</h3>
        <p className="text-lg text-gray-700 mb-10">
          How Traliq Media impacts businesses.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { title: "Social Impact", text: "Strengthened community bonds and support.", icon: <FaUsers /> },
            { title: "Market Penetration", text: "Expanded market reach and brand presence.", icon: <FaChartLine /> },
            { title: "Engagement Boost", text: "150% increase in social media interactions.", icon: <FaHandshake /> },
            { title: "Sales Impact", text: "Significant rise in product sales.", icon: <FaShoppingCart /> },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="text-4xl text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
