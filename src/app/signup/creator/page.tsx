"use client";

import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer";

const CreatorSignup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    socialHandles: "",
    followerCount: "",
    contentCategory: [] as string[],
    otherCategory: "",
    bio: "",
    media: null as File | null,
    agreeToTerms: false,
  });

  const countries = ["Kenya", "Rwanda", "Ethiopia"];
  const categories = ["Fashion", "Technology", "Food", "Lifestyle", "Travel", "Other"];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;

      if (name === "agreeToTerms") {
        setFormData((prev) => ({ ...prev, agreeToTerms: target.checked }));
      } else {
        const updatedCategories = target.checked
          ? [...formData.contentCategory, value]
          : formData.contentCategory.filter((cat) => cat !== value);
        setFormData((prev) => ({ ...prev, contentCategory: updatedCategories }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, media: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // You can handle form submission to an API or server here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Join Traliq Media</h1>
            <p className="text-xl text-gray-600">Value Your Creativity, Expand Your Reach</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Full Name", name: "fullName", type: "text" },
                { label: "Email Address", name: "email", type: "email" },
                { label: "Phone Number", name: "phone", type: "tel" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-gray-700 font-medium mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={(formData as never)[field.name]}
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
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Social Media Handles</label>
              <input
                type="text"
                name="socialHandles"
                value={formData.socialHandles}
                onChange={handleInputChange}
                placeholder="@username (Instagram, TikTok, etc.)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Total Follower Count</label>
              <input
                type="number"
                name="followerCount"
                value={formData.followerCount}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Preferred Content Category</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <label key={category} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="contentCategory"
                      value={category}
                      checked={formData.contentCategory.includes(category)}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {formData.contentCategory.includes("Other") && (
              <div>
                <label className="block text-gray-700 font-medium mb-2">If Other, please specify</label>
                <input
                  type="text"
                  name="otherCategory"
                  value={formData.otherCategory}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            <div>
              <label className="block text-gray-700 font-medium mb-2">Brief Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Upload Media</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <FaCloudUploadAlt className="mx-auto text-4xl text-gray-400 mb-2" />
                <p className="text-gray-500">Drag and drop files here or click to browse</p>
                <input type="file" name="media" onChange={handleFileChange} className="hidden" />
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
            Join the Network
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreatorSignup;
