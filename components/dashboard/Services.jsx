"use client";
import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import { FaServicestack, FaMoneyBillWave } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs"; // For the 3 dots options icon
import ButtonQuinary from "../landing-page/ButtonQuinary";
import Link from "next/link";

const Services = () => {
  const [showOptions, setShowOptions] = useState({
    services: false,
    payment: false,
  });

  // Toggle dropdown visibility
  const toggleOptions = (type) => {
    setShowOptions((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const servicesList = [
    { name: "Web Development", domain: "webdev.com", logo: "🌐", dueAmount: 0 },
    {
      name: "SEO Optimization",
      domain: "seoexpert.com",
      logo: "🔍",
      dueAmount: 50,
    },
    {
      name: "Cloud Hosting",
      domain: "cloudhost.com",
      logo: "☁️",
      dueAmount: 0,
    },
  ];

  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-[1rem]">
        <div className="flex justify-between items-center mb-6">
          {/* Left Side - Title and Welcome Message */}
          <div>
            <h2 className="text-2xl font-semibold mb-1">Services</h2>
            <p className="text-gray-600">Manage your services efficiently!</p>
          </div>

          {/* Add New Service Button */}
          <Link href="/dashboard/services/buy-service">
            <ButtonQuinary btnText={"Add New Service"} />
          </Link>
        </div>

        {/* Dashboard Stats for Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Total Services */}
          <div className="bg-blue-100 p-6 rounded-[1rem] relative text-left">
            {/* Three Dots */}
            <div
              className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={() => toggleOptions("services")}
            >
              <BsThreeDotsVertical />
            </div>
            {/* Dropdown Options */}
            {showOptions.services && (
              <div className="absolute right-3 top-10 bg-white border rounded-[0.7rem] py-2">
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Add New Service
                </p>
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  View All
                </p>
              </div>
            )}
            {/* Icon */}
            <div className="flex justify-start mb-4">
              <div className="bg-blue-500 p-4 rounded-full text-white">
                <FaServicestack className="w-6 h-6" />
              </div>
            </div>
            {/* Number */}
            <h3 className="text-3xl font-bold mb-2">25</h3>
            {/* Details */}
            <p className="text-lg font-semibold">Total Services</p>
          </div>

          {/* Due Payment */}
          <div className="bg-red-100 p-6 rounded-[1rem] relative text-left">
            {/* Three Dots */}
            <div
              className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={() => toggleOptions("payment")}
            >
              <BsThreeDotsVertical />
            </div>
            {/* Dropdown Options */}
            {showOptions.payment && (
              <div className="absolute right-3 top-10 bg-white border rounded-[0.7rem] py-2">
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  View All Payments
                </p>
              </div>
            )}
            {/* Icon */}
            <div className="flex justify-start mb-4">
              <div className="bg-red-500 p-4 rounded-full text-white">
                <FaMoneyBillWave className="w-6 h-6" />
              </div>
            </div>
            {/* Amount Due */}
            <h3 className="text-3xl font-bold mb-2">$1,200</h3>
            {/* Details */}
            <p className="text-lg font-semibold">Due Payment</p>
          </div>
        </div>
      </div>

      {/* List of All Services */}
      <div className="bg-white p-6 rounded-[1rem] mt-8">
        <h3 className="text-xl font-semibold mb-4">All Services</h3>
        <ul>
          {servicesList.map((service, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-4 rounded-[0.6rem] hover:bg-gray-100 cursor-pointer transition-all duration-200"
            >
              <div className="flex items-center">
                {/* Logo */}
                <div className="bg-gray-300 p-2 rounded-full mr-4">
                  {service.logo}
                </div>
                {/* Name and Domain */}
                <div>
                  <h4 className="text-lg font-semibold">{service.name}</h4>
                  <p className="text-sm text-gray-500">{service.domain}</p>
                  {/* Due Amount */}
                  {service.dueAmount > 0 && (
                    <p className="text-sm text-red-500 font-semibold">
                      Due Amount: BDT{service.dueAmount}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center">
                {/* Pay Button if Due */}
                {service.dueAmount > 0 && (
                  <button className="bg-red-500 text-white px-4 py-2 mr-4 rounded-[0.5rem] hover:bg-red-600">
                    Pay
                  </button>
                )}
                {/* Login Button */}
                <button className="bg-accent_secondary text-white px-4 py-2 rounded-[0.5rem] hover:bg-[#00a86d]">
                  Login
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </DashboardLayout>
  );
};

export default Services;
