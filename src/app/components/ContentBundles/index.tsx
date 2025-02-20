import React from "react";
import { FaCheck } from "react-icons/fa";

const packages = [
  {
    id: 1,
    title: "Starter Package",
    price: "Ksh 10,000",
    description: "Best for small businesses looking to start building their online presence.",
    features: [
      "1 Creator Assigned",
      "2 High-Quality Videos",
      "3 Professional Images",
      "1 Creator Post on Their Own Channel",
      "Basic Content Strategy Guide",
    ],
    color: "border-blue-500",
    bgGradient: "bg-gradient-to-br from-blue-50 to-white",
    accentColor: "text-blue-600",
    hoverGradient: "hover:bg-gradient-to-br hover:from-blue-100 hover:to-blue-50",
  },
  {
    id: 2,
    title: "Growth Package",
    price: "Ksh 20,000",
    description: "For businesses ready to scale up and improve engagement.",
    features: [
      "2 Creators Assigned",
      "4 High-Quality Videos",
      "6 Professional Images",
      "2 Creator Posts on Their Own Channels",
      "Trend-Based Video Strategy",
      "1 Boosted Ad Setup",
      "Performance Report",
    ],
    color: "border-green-500",
    bgGradient: "bg-gradient-to-br from-green-50 to-white",
    accentColor: "text-green-600",
    hoverGradient: "hover:bg-gradient-to-br hover:from-green-100 hover:to-green-50",
  },
  {
    id: 3,
    title: "Premium Business Package",
    price: "Ksh 50,000",
    description: "For businesses that want to dominate TikTok and attract serious buyers.",
    features: [
      "3 Creators Assigned",
      "6 High-Quality Videos",
      "10 Professional Images",
      "3 Creator Posts on Their Own Channels",
      "Advanced Trend Strategy",
      "2 Boosted Ad Setups",
      "1 Professionally Edited Video",
      "Business Growth Report",
    ],
    color: "border-red-500",
    bgGradient: "bg-gradient-to-br from-red-50 to-white",
    accentColor: "text-red-600",
    hoverGradient: "hover:bg-gradient-to-br hover:from-red-100 hover:to-red-50",
  },
  {
    id: 4,
    title: "Domination Package",
    price: "Ksh 100,000",
    description: "For businesses that want a full content takeover to drive massive engagement & sales.",
    features: [
      "5 Creators Assigned",
      "10 High-Quality Videos",
      "15 Professional Images",
      "5 Creator Posts on Their Own Channels",
      "Influencer Takeover Day",
      "Live TikTok Selling Session",
      "4 Boosted Ad Setups",
      "2 Professionally Edited Videos",
      "Full Business Growth Analysis",
    ],
    color: "border-purple-500",
    bgGradient: "bg-gradient-to-br from-purple-50 to-white",
    accentColor: "text-purple-600",
    hoverGradient: "hover:bg-gradient-to-br hover:from-purple-100 hover:to-purple-50",
  },
  {
    id: 5,
    title: "Custom Business Growth Package",
    price: "Ksh 150,000+",
    description: "Fully personalized content plan tailored to your brand’s unique goals.",
    features: [
      "2-Month Strategy Session",
      "Custom Content Mix",
      "Handpicked Creators",
      "Product Highlight Videos",
      "Ad Optimization with 5 Boosted Ads",
      "Performance Analytics Report",
    ],
    color: "border-yellow-500",
    bgGradient: "bg-gradient-to-br from-yellow-50 to-white",
    accentColor: "text-yellow-600",
    hoverGradient: "hover:bg-gradient-to-br hover:from-yellow-100 hover:to-yellow-50",
  },
  {
    id: 6,
    title: "Enterprise Social Media Domination Package",
    price: "Ksh 300,000+",
    description: "Comprehensive content and marketing strategy for long-term business growth.",
    features: [
      "3-Month Business Audit & Growth Plan",
      "Custom Content Calendar",
      "Dedicated Content Team",
      "Brand Storytelling Series",
      "Live Engagement Sessions",
      "Performance Tracking & Insights",
      "VIP Priority Support",
    ],
    color: "border-teal-500",
    bgGradient: "bg-gradient-to-br from-teal-50 to-white",
    accentColor: "text-teal-600",
    hoverGradient: "hover:bg-gradient-to-br hover:from-teal-100 hover:to-teal-50",
  },
];

const ContentBundles = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center">
        Traliq&apos;s Creator-Powered Content Bundles
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer 
            ${pkg.bgGradient} ${pkg.hoverGradient}`}
          >
            <div className="p-8 h-full">
              <h4 className={`text-2xl font-bold mb-2 ${pkg.accentColor}`}>{pkg.title}</h4>
              <p className="text-2xl font-semibold text-gray-900 mb-4">{pkg.price}</p>
              <p className="text-gray-600 mb-6">{pkg.description}</p>
              <div className="space-y-3">
                {pkg.features.map((feature, index) => (
                  <div key={index} className="flex items-start group">
                    <FaCheck className={`${pkg.accentColor} mt-1 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110`} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentBundles;
