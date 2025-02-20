"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer";

interface FormData {
  businessName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  businessSector: string;
  marketingBudget: string;
  campaignGoals: string[];
  targetAudienceDescription: string;
  preferredCreatorTypes: string[];
  agreeToTerms: boolean;
}

const BusinessSignup = () => {
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "Kenya",
    businessSector: "Fashion",
    marketingBudget: "",
    campaignGoals: [],
    targetAudienceDescription: "",
    preferredCreatorTypes: [],
    agreeToTerms: false,
  });

  const countries = ["Kenya", "Rwanda", "Ethiopia"];
  const campaignGoals = [
    "Brand Awareness",
    "Lead Generation",
    "Product Promotion",
    "Other Goals",
  ];
  const creatorTypes = [
    "Nano",
    "Micro",
    "Macro",
    "Celebrity Influencer",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;

      if (name === "agreeToTerms") {
        setFormData((prev) => ({ ...prev, agreeToTerms: target.checked }));
      } else {
        if (name === "campaignGoals") {
          setFormData((prev) => ({
            ...prev,
            campaignGoals: target.checked
              ? [...prev.campaignGoals, value]
              : prev.campaignGoals.filter((goal) => goal !== value),
          }));
        } else if (name === "preferredCreatorTypes") {
          setFormData((prev) => ({
            ...prev,
            preferredCreatorTypes: target.checked
              ? [...prev.preferredCreatorTypes, value]
              : prev.preferredCreatorTypes.filter(
                  (creatorType) => creatorType !== value
                ),
          }));
        }
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // You can handle form submission to an API or server here
  };

  // Helper function to get input value based on field name
  const getInputValue = (fieldName: keyof FormData) => {
    const value = formData[fieldName];
    return typeof value === "string" ? value : "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Partner with Traliq Media</h1>
            <p className="text-xl text-gray-600">Reach Your Target Audience with Top Creators</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Business Name", name: "businessName", type: "text" },
                { label: "Contact Person", name: "contactPerson", type: "text" },
                { label: "Email Address", name: "email", type: "email" },
                { label: "Phone Number", name: "phone", type: "tel" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-gray-700 font-medium mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={getInputValue(field.name as keyof FormData)}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              ))}

              <div>
                <label className="block text-gray-700 font-medium mb-2">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Business Sector</label>
                <input
                  type="text"
                  name="businessSector"
                  value={formData.businessSector}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Marketing Budget</label>
                <input
                  type="text"
                  name="marketingBudget"
                  value={formData.marketingBudget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Campaign Goals</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {campaignGoals.map((goal) => (
                  <label key={goal} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="campaignGoals"
                      value={goal}
                      checked={formData.campaignGoals.includes(goal)}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{goal}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Target Audience Description</label>
              <textarea
                name="targetAudienceDescription"
                value={formData.targetAudienceDescription}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Preferred Creator Types</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {creatorTypes.map((type) => (
                  <label key={type} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="preferredCreatorTypes"
                      value={type}
                      checked={formData.preferredCreatorTypes.includes(type)}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600"
                  required
                />
                <span className="text-gray-700">I agree to the terms and conditions and allow Traliq Media to contact me.</span>
              </label>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200">
              Start Your Campaign
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BusinessSignup;