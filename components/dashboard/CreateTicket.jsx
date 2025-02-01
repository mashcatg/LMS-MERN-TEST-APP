"use client";
import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import ButtonQuinary from "../landing-page/ButtonQuinary";
import RichTextEditor from "./RichTextEditor";

const priorities = ["Low", "Medium", "High", "Critical"];
const services = ["Web Development", "Mobile App", "SEO", "Hosting", "Other"];

const CreateTicket = () => {
  const [ticketData, setTicketData] = useState({
    problemStatement: "",
    priority: "",
    service: "",
    description: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    alert("Ticket created successfully!");
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-[1rem]">
        <h2 className="text-2xl font-semibold mb-4">Create New Ticket</h2>
        <p className="text-gray-600 mb-6">
          Please fill in the details for your issue. Ensure all fields are
          filled accurately to submit the ticket.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Ticket Details */}

          <div className="input-container mb-6">
            <label className="block text-sm font-semibold mb-2">
              Problem Statement
            </label>
            <input
              type="text"
              name="problemStatement"
              placeholder="Explain the issue in a line"
              value={ticketData.problemStatement}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-[0.5rem] focus:outline-none focus:border-accent_secondary px-4 py-2"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
            {/* Priority */}
            <div className="input-container mr-3">
              <label className="block text-sm font-semibold mb-2">
                Priority
              </label>
              <select
                name="priority"
                value={ticketData.priority}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-[0.5rem] focus:outline-none focus:border-accent_secondary px-4 py-2 bg-white text-gray-700 text-sm"
                required
              >
                <option value="">Select Priority</option>
                {priorities.map((priority) => (
                  <option key={priority} value={priority}>
                    {priority}
                  </option>
                ))}
              </select>
            </div>

            {/* Service */}
            <div className="input-container mb-6 ml-3">
              <label className="block text-sm font-semibold mb-2">
                Service
              </label>
              <select
                name="service"
                value={ticketData.service}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-[0.5rem] focus:outline-none focus:border-accent_secondary px-4 py-2 bg-white text-gray-700 text-sm"
                required
              >
                <option value="">Select Service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <RichTextEditor />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-12">
            <ButtonQuinary btnText={"Submit Ticket"} />
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CreateTicket;
