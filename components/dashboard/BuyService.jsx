"use client";
import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import ButtonQuinary from "../landing-page/ButtonQuinary";

const pricingPlans = [
  {
    name: "Free Plan",
    price: 0,
    maxStudents: 50,
    storage: "0.5GB",
  },
  {
    name: "Starter Plan",
    price: 800,
    maxStudents: 100,
    storage: "1GB",
  },
  {
    name: "Pro Plan",
    price: 1200,
    maxStudents: 250,
    storage: "2.5GB",
  },
  {
    name: "Premium Plan",
    price: 1800,
    maxStudents: 500,
    storage: "5GB",
  },
  {
    name: "Business Plan",
    price: 2500,
    maxStudents: 1000,
    storage: "10GB",
  },
  {
    name: "Enterprise Plan",
    price: 5000,
    maxStudents: 2500,
    storage: "25GB",
  },
  {
    name: "Plus Plan",
    price: 8000,
    maxStudents: 5000,
    storage: "50GB",
  },
  {
    name: "Ultimate Plan",
    price: 14000,
    maxStudents: 10000,
    storage: "100GB",
  },
];

const BuyService = () => {
  const [formData, setFormData] = useState({
    websiteName: "",
    subdomain: "",
    adminNumber: "",
    password: "",
    selectedPlan: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle plan selection
  const handlePlanSelect = (plan) => {
    setFormData((prev) => ({ ...prev, selectedPlan: plan }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    alert("Service purchased successfully!");
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-[1rem]">
        <h2 className="text-2xl font-semibold mb-4">Buy Service</h2>
        <p className="text-gray-600 mb-6">
          Provide the details for your new service and select a pricing plan
          that fits your needs. Ensure all fields are filled accurately to
          proceed with the payment.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Website Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="input-container mb-6">
              <label className="block text-sm font-semibold mb-2">
                Website Name
              </label>
              <input
                type="text"
                name="websiteName"
                value={formData.websiteName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-[0.5rem]"
                required
              />
            </div>
            <div className="input-container mb-6">
              <label className="block text-sm font-semibold mb-2 z-10">
                Subdomain
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="subdomain"
                  value={formData.subdomain}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-[0.5rem] pr-24"
                  required
                />
                <span className="absolute right-0 top-0 bottom-0 bg-gray-200 p-3 rounded-r-[0.5rem] text-gray-500 text-sm flex items-center">
                  .ennovat.com
                </span>
              </div>
            </div>

            <div className="input-container mb-6">
              <label
                className="block text-left text-gray-700 mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <div className="flex">
                <select
                  id="countryCode"
                  name="countryCode"
                  className="border border-gray-300 rounded-tl-[0.5rem] rounded-bl-[0.5rem] focus:outline-none focus:border-accent_secondary px-4 py-2 bg-white text-gray-700 w-[30%] text-sm"
                >
                  <option value="+880">+880 (Bangladesh)</option>
                  <option value="+1">+1 (US)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+91">+91 (India)</option>
                </select>

                <input
                  type="number"
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-300 rounded-tr-[0.5rem] rounded-br-[0.5rem] focus:outline-none focus:border-accent_secondary px-4 py-2"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="input-container mb-6">
              <label className="block text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-[0.5rem]"
                required
              />
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">
              Select a Pricing Plan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative p-6 border rounded-[1rem] cursor-pointer overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 ${
                    formData.selectedPlan === plan.name
                      ? "border-accent_secondary"
                      : "border-gray-300"
                  }`}
                  onClick={() => handlePlanSelect(plan.name)}
                >
                  {/* Gradient background and animation */}
                  <span
                    className={`absolute inset-0 w-full h-full bg-gradient-to-br ${
                      formData.selectedPlan === plan.name
                        ? "from-accent_primary via-accent_secondary to-accent_primary"
                        : "from-white via-gray-100 to-white"
                    } transition-all duration-300 ease-in-out`}
                  ></span>
                  <span
                    className={`absolute bottom-0 right-0 w-64 h-64 mb-32 mr-4 transition-transform duration-500 origin-bottom-left transform rounded-full ${
                      formData.selectedPlan === plan.name
                        ? "rotate-45 translate-x-24 bg-accent_tertiary opacity-30 group-hover:rotate-90"
                        : "opacity-0"
                    }`}
                  ></span>

                  <h4 className="relative text-lg font-semibold mb-2 text-gray-700 z-10">
                    {plan.name}
                  </h4>
                  <p
                    className={`relative text-3xl font-bold mb-2 ${
                      formData.selectedPlan === plan.name
                        ? "text-white"
                        : "text-gray-900"
                    } z-10`}
                  >
                    ${plan.price}
                    <span
                      className={`text-sm ${
                        formData.selectedPlan === plan.name
                          ? "text-gray-100"
                          : "text-gray-500"
                      }`}
                    >
                      /month
                    </span>
                  </p>
                  <p
                    className={`relative text-sm text-gray-500 z-10 ${
                      formData.selectedPlan === plan.name
                        ? "text-gray-100"
                        : "text-gray-500"
                    }`}
                  >
                    Max Students: {plan.maxStudents}
                  </p>
                  <p
                    className={`relative text-sm text-gray-500 z-10 ${
                      formData.selectedPlan === plan.name
                        ? "text-gray-100"
                        : "text-gray-500"
                    }`}
                  >
                    Storage: {plan.storage}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Button */}
          <div className="flex justify-center pt-4">
            <ButtonQuinary btnText={"Pay & Confirm Package"} />
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default BuyService;
