"use client";
import React from "react";
import { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import {
  FaServicestack,
  FaUserGraduate,
  FaMoneyBillWave,
  FaTicketAlt,
} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs"; // For the 3 dots options icon
import ButtonQuinary from "../landing-page/ButtonQuinary";

const Home = () => {
  const [showOptions, setShowOptions] = useState({
    services: false,
    students: false,
    payment: false,
    tickets: false,
  });

  // Toggle dropdown visibility
  const toggleOptions = (type) => {
    setShowOptions((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const servicesList = [
    { name: "Web Development", domain: "webdev.com", logo: "🌐" },
    { name: "SEO Optimization", domain: "seoexpert.com", logo: "🔍" },
    { name: "Cloud Hosting", domain: "cloudhost.com", logo: "☁️" },
  ];

  const supportTickets = [
    { title: "Issue with website loading", status: "Open", priority: "High" },
    { title: "Payment gateway issue", status: "Resolved", priority: "Medium" },
    { title: "Domain expired", status: "In Progress", priority: "Low" },
  ];

  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-[1rem]">
        <div className="flex justify-between items-center mb-6">
          {/* Left Side - Title and Welcome Message */}
          <div>
            <h2 className="text-2xl font-semibold mb-1">Home</h2>
            <p className="text-gray-600">Welcome to your dashboard!</p>
          </div>

          <ButtonQuinary btnText={"Buy New Service"} />
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
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
                  Buy New Service
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

          {/* Total Students */}
          <div className="bg-green-100 p-6 rounded-[1rem] relative text-left">
            {/* Icon */}
            <div className="flex justify-start mb-4">
              <div className="bg-green-500 p-4 rounded-full text-white">
                <FaUserGraduate className="w-6 h-6" />
              </div>
            </div>
            {/* Number */}
            <h3 className="text-3xl font-bold mb-2">120</h3>
            {/* Details */}
            <p className="text-lg font-semibold">Total Students</p>
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
                  View All
                </p>
              </div>
            )}
            {/* Icon */}
            <div className="flex justify-start mb-4">
              <div className="bg-red-500 p-4 rounded-full text-white">
                <FaMoneyBillWave className="w-6 h-6" />
              </div>
            </div>
            {/* Number */}
            <h3 className="text-3xl font-bold mb-2">$1,200</h3>
            {/* Details */}
            <p className="text-lg font-semibold">Due Payment</p>
          </div>

          {/* Active Support Tickets */}
          <div className="bg-yellow-100 p-6 rounded-[1rem] relative text-left">
            {/* Three Dots */}
            <div
              className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={() => toggleOptions("tickets")}
            >
              <BsThreeDotsVertical />
            </div>
            {/* Dropdown Options */}
            {showOptions.tickets && (
              <div className="absolute right-3 top-10 bg-white border rounded-[0.7rem] py-2">
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Create New
                </p>
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  View All
                </p>
              </div>
            )}
            {/* Icon */}
            <div className="flex justify-start mb-4">
              <div className="bg-yellow-500 p-4 rounded-full text-white">
                <FaTicketAlt className="w-6 h-6" />
              </div>
            </div>
            {/* Number */}
            <h3 className="text-3xl font-bold mb-2">5</h3>
            {/* Details */}
            <p className="text-lg font-semibold">Support Tickets</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Services Column */}
        <div className="bg-white p-6 rounded-[1rem]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Services</h3>
            <button className="text-accent_secondary hover:underline">
              View All
            </button>
          </div>
          <ul>
            {servicesList.slice(0, 5).map((service, index) => (
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
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Tickets Column */}
        <div className="bg-white p-6 rounded-[1rem]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Support Tickets</h3>
            <button className="text-accent_secondary hover:underline">
              View All
            </button>
          </div>
          <ul>
            {supportTickets.slice(0, 5).map((ticket, index) => (
              <li
                key={index}
                className="p-4 rounded-[0.6rem] hover:bg-gray-100 cursor-pointer transition-all duration-200"
              >
                <h4 className="text-lg font-semibold">{ticket.title}</h4>
                <p className="text-sm text-gray-500">Status: {ticket.status}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;
