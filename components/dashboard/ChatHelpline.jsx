"use client";
import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import { FaPaperPlane } from "react-icons/fa";

const ChatHelpline = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Agent",
      text: "Hello! How can I assist you today?",
      time: "09:00 AM",
    },
    {
      id: 2,
      user: "User",
      text: "I need help with my account.",
      time: "09:05 AM",
    },
    {
      id: 3,
      user: "Agent",
      text: "Issue with account login. The user is unable to log in using their email credentials. They've tried resetting the password multiple times but continue to experience the same issue.",
      time: "09:10 AM",
    }, // Description as the first chat message
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages.length + 1,
          user: "User",
          text: newMessage,
          time: newTime,
        },
      ]);
      setNewMessage("");
    }
  };

  // Problem details (static example)
  const problemDetails = {
    problemStatement: "Issue with account login",
    priority: "High",
    service: "Account Management",
  };

  return (
    <DashboardLayout>
      {/* Problem Details Container */}
      <div className="bg-white p-6 rounded-[1rem] mb-4">
        <h2 className="text-xl font-semibold mb-4">Ticket Details</h2>
        <div className="flex justify-between mb-4">
          <div className="flex flex-col w-1/3">
            <p className="font-medium text-gray-600">Problem Statement:</p>
            <p>{problemDetails.problemStatement}</p>
          </div>
          <div className="flex flex-col w-1/3">
            <p className="font-medium text-gray-600">Priority:</p>
            <p>{problemDetails.priority}</p>
          </div>
          <div className="flex flex-col w-1/3">
            <p className="font-medium text-gray-600">Service:</p>
            <p>{problemDetails.service}</p>
          </div>
        </div>
      </div>

      {/* Chat Box */}
      <div className="bg-white p-6 rounded-[1rem] mb-4 h-[400px] flex flex-col justify-between">
        <div className="overflow-y-auto mb-4">
          <div className="flex flex-col space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.user === "User" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-[0.5rem] max-w-xs ${
                    message.user === "User"
                      ? "bg-accent_secondary text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p>{message.text}</p>
                  <p className="text-sm text-gray-500 mt-1">{message.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input Box */}
        <div className="flex items-center border-t pt-4">
          <input
            type="text"
            className="rounded-[0.5rem] flex-grow p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent_secondary"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <button
            className="rounded-[0.5rem] bg-accent_secondary text-white px-4 h-full ml-2 hover:bg-[#00a86d] transition-colors duration-300"
            onClick={handleSendMessage}
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ChatHelpline;
