"use client";
import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import { FaServicestack, FaMoneyBillWave } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import ButtonQuinary from "../landing-page/ButtonQuinary";
import Link from "next/link";

const Invoices = () => {
  const [showOptions, setShowOptions] = useState({
    invoices: false,
    payment: false,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Sample data for payment history with serviceName and invoiceId
  const paymentHistory = [
    {
      dueDate: "2024-09-01",
      status: "Unpaid",
      amount: 50,
      serviceName: "Web Hosting",
      invoiceId: "1",
    },
    {
      dueDate: "2024-08-15",
      status: "Paid",
      amount: 120,
      serviceName: "SEO Optimization",
      invoiceId: "2",
    },
    {
      dueDate: "2024-07-10",
      status: "Unpaid",
      amount: 80,
      serviceName: "Social Media Management",
      invoiceId: "3",
    },
    {
      dueDate: "2024-06-20",
      status: "Paid",
      amount: 200,
      serviceName: "App Development",
      invoiceId: "4",
    },
    {
      dueDate: "2024-05-30",
      status: "Unpaid",
      amount: 150,
      serviceName: "Consulting",
      invoiceId: "5",
    },
    // Add more data as needed
  ];

  const totalPages = Math.ceil(paymentHistory.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedHistory = paymentHistory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleOptions = (type) => {
    setShowOptions((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-[1rem] mb-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold mb-1 text-gray-800">
              Invoices
            </h2>
            <p className="text-gray-600">Manage your invoices efficiently!</p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Total Services */}
          <div className="bg-blue-100 p-6 rounded-[1rem] relative text-left">
            {/* Three Dots */}
            <div
              className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={() => toggleOptions("invoices")}
            >
              <BsThreeDotsVertical />
            </div>
            {/* Dropdown Options */}
            {showOptions.invoices && (
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

      {/* Payment History Table */}
      <div className="bg-white p-6 rounded-[1rem]">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Payment History
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="py-2 px-4 text-left text-gray-600">#</th>
                <th className="py-2 px-4 text-left text-gray-600">Due Date</th>
                <th className="py-2 px-4 text-left text-gray-600">
                  Service Name
                </th>
                <th className="py-2 px-4 text-left text-gray-600">Status</th>
                <th className="py-2 px-4 text-left text-gray-600">Amount</th>
                <th className="py-2 px-4 text-right text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedHistory.map((payment, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{payment.invoiceId}</td>
                  <td className="py-2 px-4">{payment.dueDate}</td>
                  <td className="py-2 px-4">{payment.serviceName}</td>
                  <td className="py-2 px-4">
                    {payment.status === "Unpaid" ? (
                      <span className="text-red-500 font-semibold">Unpaid</span>
                    ) : (
                      <span className="text-accent_secondary font-semibold">
                        Paid
                      </span>
                    )}
                  </td>
                  <td className="py-2 px-4">${payment.amount}</td>
                  <td className="py-2 px-4 text-right">
                    <div className="flex justify-end space-x-2">
                      {payment.status === "Unpaid" && (
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300">
                          Pay
                        </button>
                      )}
                      <button className="bg-accent_secondary text-white px-4 py-2 rounded hover:bg-[#00a86d] transition-colors duration-300">
                        Print
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <nav>
            <ul className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index + 1}>
                  <button
                    className={`px-4 py-2 rounded ${
                      currentPage === index + 1
                        ? "bg-accent_secondary text-white"
                        : "bg-gray-200 text-gray-600"
                    } hover:bg-[#00a86d] hover:text-white transition-colors duration-300`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Invoices;
