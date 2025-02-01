"use client";
import React, { useState, useEffect } from "react";
import DashboardLayout from "./DashboardLayout";
import { FaTicketAlt, FaClipboardList } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import ButtonQuinary from "../landing-page/ButtonQuinary";
import Chatbox from "./Chatbox"; // Import the Chatbox component

const Helpline = () => {
  const [showOptions, setShowOptions] = useState({
    tickets: false,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Sample data for tickets
  const ticketList = [
    {
      ticketId: "1",
      priority: "High",
      status: "Open",
      lastMessage: "Need further assistance on account setup.",
    },
    {
      ticketId: "2",
      priority: "Medium",
      status: "Resolved",
      lastMessage: "Issue with billing, now resolved.",
    },
    {
      ticketId: "3",
      priority: "Low",
      status: "Pending",
      lastMessage: "Awaiting customer response.",
    },
    {
      ticketId: "4",
      priority: "High",
      status: "Open",
      lastMessage: "Facing login issues, need support.",
    },
    {
      ticketId: "5",
      priority: "Low",
      status: "Open",
      lastMessage: "Query about features.",
    },
    // Add more data as needed
  ];

  const totalPages = Math.ceil(ticketList.length / itemsPerPage);
  const totalTickets = ticketList.length;
  const activeTickets = ticketList.filter(
    (ticket) => ticket.status === "Open"
  ).length;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedTickets = ticketList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleOptions = (type) => {
    setShowOptions((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setShowOptions({ tickets: false });
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-[1rem] mb-4">
        <div className="flex justify-between items-center mb-6">
          {/* Left Side - Title and Welcome Message */}
          <div>
            <h2 className="text-2xl font-semibold mb-1">Helpline</h2>
            <p className="text-gray-600">
              Track and manage your support tickets.
            </p>
          </div>
          <Link href="/dashboard/helpline/create-ticket">
            <ButtonQuinary btnText={"New Ticket"} />
          </Link>
        </div>

        {/* Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Total Tickets */}
          <div className="bg-blue-100 p-6 rounded-[1rem] relative text-left">
            <div
              className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={() => toggleOptions("tickets")}
            >
              <BsThreeDotsVertical />
            </div>
            {showOptions.tickets && (
              <div className="absolute right-3 top-10 bg-white border rounded-[0.7rem] py-2">
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  View All Tickets
                </p>
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Create New Ticket
                </p>
              </div>
            )}
            <div className="flex justify-start mb-4">
              <div className="bg-blue-500 p-4 rounded-full text-white">
                <FaTicketAlt className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-2">{totalTickets}</h3>
            <p className="text-lg font-semibold">Total Tickets</p>
          </div>

          {/* Active Tickets */}
          <div className="bg-red-100 p-6 rounded-[1rem] relative text-left">
            <div className="flex justify-start mb-4">
              <div className="bg-red-500 p-4 rounded-full text-white">
                <FaClipboardList className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-2">{activeTickets}</h3>
            <p className="text-lg font-semibold">Active Tickets</p>
          </div>
        </div>
      </div>

      {/* Ticket List */}
      <div className="bg-white p-6 rounded-[1rem]">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Ticket History
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="py-2 px-4 text-left text-gray-600">#</th>
                <th className="py-2 px-4 text-left text-gray-600">Priority</th>
                <th className="py-2 px-4 text-left text-gray-600">Status</th>
                <th className="py-2 px-4 text-left text-gray-600">Problem</th>
                <th className="py-2 px-4 text-right text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTickets.map((ticket, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{ticket.ticketId}</td>
                  <td className="py-2 px-4">{ticket.priority}</td>
                  <td className="py-2 px-4">
                    {ticket.status === "Open" ? (
                      <span className="text-red-500 font-semibold">Open</span>
                    ) : (
                      <span className="text-green-500 font-semibold">
                        {ticket.status}
                      </span>
                    )}
                  </td>
                  <td className="py-2 px-4">{ticket.lastMessage}</td>
                  <td className="py-2 px-4 text-right">
                    <button className="bg-accent_secondary text-white px-4 py-2 rounded hover:bg-[#00a86d] transition-colors duration-300">
                      Open Ticket
                    </button>
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

export default Helpline;
