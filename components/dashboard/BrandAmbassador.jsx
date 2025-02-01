"use client";
import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import {
  FaUsers,
  FaServicestack,
  FaDollarSign,
  FaMoneyBillWave,
} from "react-icons/fa";
import { BsThreeDotsVertical, BsClipboard } from "react-icons/bs"; // For the 3 dots options icon and clipboard
import Link from "next/link";

const BrandAmbassador = () => {
  const [showOptions, setShowOptions] = useState({
    totalUsers: false,
    totalServices: false,
    monthlyEarning: false,
    totalDue: false,
  });

  // Toggle dropdown visibility
  const toggleOptions = (type) => {
    setShowOptions((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  // Copy referral link to clipboard
  const copyReferralLink = () => {
    navigator.clipboard.writeText(
      "https://lms.ennovat.com/login/affiliate_code"
    ); // Example referral link
    alert("Referral link copied to clipboard!");
  };

  const stats = [
    {
      label: "Total Users",
      value: 150,
      icon: <FaUsers className="w-6 h-6 text-white" />,
      bgColor: "bg-blue-500",
      containerColor: "bg-blue-100",
      type: "totalUsers",
    },
    {
      label: "Total Services",
      value: 25,
      icon: <FaServicestack className="w-6 h-6 text-white" />,
      bgColor: "bg-green-500",
      containerColor: "bg-green-100",
      type: "totalServices",
    },
    {
      label: "Monthly Earning",
      value: "$3,500",
      icon: <FaDollarSign className="w-6 h-6 text-white" />,
      bgColor: "bg-yellow-500",
      containerColor: "bg-yellow-100",
      type: "monthlyEarning",
    },
    {
      label: "Total Due",
      value: "$1,200",
      icon: <FaMoneyBillWave className="w-6 h-6 text-white" />,
      bgColor: "bg-red-500",
      containerColor: "bg-red-100",
      type: "totalDue",
    },
  ];

  // Sample services data
  const servicesList = [
    {
      id: 1,
      userName: "John Doe",
      serviceName: "Web Development",
      domain: "webdev.com",
      commission: 100,
      date: "2024-09-15",
      logo: "🌟",
    },
    {
      id: 2,
      userName: "Jane Smith",
      serviceName: "SEO Optimization",
      domain: "seoexpert.com",
      commission: 75,
      date: "2024-09-14",
      logo: "🔍",
    },
    {
      id: 3,
      userName: "Alice Johnson",
      serviceName: "Cloud Hosting",
      domain: "cloudhost.com",
      commission: 50,
      date: "2024-09-13",
      logo: "☁️",
    },
  ];

  return (
    <DashboardLayout>
      {/* Stats Containers */}
      <div className="bg-white p-6 rounded-[1rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`${stat.containerColor} p-6 rounded-[1rem] relative text-left`}
            >
              <div
                className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={() => toggleOptions(stat.type)}
              >
                <BsThreeDotsVertical />
              </div>
              {showOptions[stat.type] && (
                <div className="absolute right-3 top-10 bg-white border rounded-[0.7rem] py-2">
                  <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    View Details
                  </p>
                </div>
              )}
              <div className="flex justify-start mb-4">
                <div className={`${stat.bgColor} p-4 rounded-full`}>
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-lg font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Referral Link */}
      <div className="bg-white p-6 rounded-[1rem] mt-8 flex items-center justify-between">
        <h3 className="text-xl font-semibold">Referral Link</h3>
        <div className="flex items-center">
          <div className="bg-[#f4f4f4] text-black px-4 py-2 rounded-tl-[0.5rem] rounded-bl-[0.5rem] flex items-center">
            <p className="text-md font-light mr-4">
              https://lms.ennovat.com/login/affiliate_code
            </p>
          </div>
          <button
            onClick={copyReferralLink}
            className="bg-accent_secondary text-white px-4 py-2 rounded-tr-[0.5rem] rounded-br-[0.5rem] flex items-center hover:bg-[#00a86d]"
          >
            <BsClipboard className="w-5 h-5 mr-2" />
            Copy Link
          </button>
        </div>
      </div>

      {/* List of Services */}
      <div className="bg-white p-6 rounded-[1rem] mt-8">
        <h3 className="text-xl font-semibold mb-4">Affiliate Services</h3>
        <ul>
          {servicesList.map((service) => (
            <li
              key={service.id}
              className="flex items-center justify-between p-4 mb-4 rounded-[0.6rem] hover:bg-gray-100 cursor-pointer transition-all duration-200 border border-gray-200"
            >
              <div className="flex items-center">
                {/* Logo */}
                <div className="bg-gray-300 p-2 rounded-full mr-4">
                  {service.logo}
                </div>
                {/* Service Details */}
                <div>
                  <h4 className="text-lg font-semibold">
                    {service.serviceName}
                  </h4>
                  <p className="text-sm text-gray-500">{service.domain}</p>
                </div>
              </div>
              {/* Commission and Date */}
              <div className="text-right">
                <p className="text-sm text-gray-600">
                  Commission: ${service.commission}
                </p>
                <p className="text-sm text-gray-400">Date: {service.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </DashboardLayout>
  );
};

export default BrandAmbassador;
