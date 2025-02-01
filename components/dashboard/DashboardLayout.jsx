"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../landing-page/Logo";
import ButtonQuaternary from "../landing-page/ButtonQuaternary";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { PiInvoice } from "react-icons/pi";
import { MdOutlineSupportAgent, MdLogout } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";

const DashboardLayout = ({ children }) => {
  const [currentPath, setCurrentPath] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // New state to track mounting

  useEffect(() => {
    setIsMounted(true); // Set to true after the component mounts
  }, []);

  useEffect(() => {
    if (isMounted) {
      setCurrentPath(window.location.pathname);
    }
  }, [isMounted]);

  const isActive = (path) => currentPath === path;

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  if (!isMounted) {
    return null; // Render nothing on the server to prevent mismatch
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-slate-100 relative">
      {/* Sidebar */}
      <aside
        className={`lg:w-64 w-full bg-white m-6 mr-0 rounded-[1rem] flex flex-col fixed lg:relative z-40 transform ${
          showSidebar
            ? "translate-x-0 max-h-[90%] shadow-md"
            : "-translate-x-[150%]" // Pushes the sidebar further left when closed
        } lg:translate-x-0 transition-transform duration-300 ease-in-out lg:flex lg:relative`}
        style={{ width: showSidebar ? "50%" : "auto" }}
      >
        <div className="flex items-center justify-center py-12 border-b">
          <Logo />
        </div>
        <nav className="flex flex-col mt-4 px-4 overflow-y-auto h-full">
          <Link
            href="/dashboard"
            className={`flex items-center py-3 px-4 rounded-[0.5rem] my-1 ${
              isActive("/dashboard")
                ? "bg-accent_secondary text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            <IoHomeOutline
              className={`w-6 h-6 ${
                isActive("/dashboard") ? "text-white" : "text-gray-600"
              }`}
            />
            <span className="ml-3 text-sm">Home</span>
          </Link>
          <Link
            href="/dashboard/services"
            className={`flex items-center py-3 px-4 rounded-[0.5rem] my-1 ${
              isActive("/dashboard/services")
                ? "bg-accent_secondary text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            <HiOutlineBuildingOffice2
              className={`w-6 h-6 ${
                isActive("/dashboard/services") ? "text-white" : "text-gray-600"
              }`}
            />
            <span className="ml-3 text-sm">Services</span>
          </Link>
          <Link
            href="/dashboard/invoices"
            className={`flex items-center py-3 px-4 rounded-[0.5rem] my-1 ${
              isActive("/dashboard/invoices")
                ? "bg-accent_secondary text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            <PiInvoice
              className={`w-6 h-6 ${
                isActive("/dashboard/invoices") ? "text-white" : "text-gray-600"
              }`}
            />
            <span className="ml-3 text-sm">Invoices</span>
          </Link>
          <Link
            href="/dashboard/helpline"
            className={`flex items-center py-3 px-4 rounded-[0.5rem] my-1 ${
              isActive("/dashboard/helpline")
                ? "bg-accent_secondary text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            <MdOutlineSupportAgent
              className={`w-6 h-6 ${
                isActive("/dashboard/helpline") ? "text-white" : "text-gray-600"
              }`}
            />
            <span className="ml-3 text-sm">Helpline</span>
          </Link>
          <Link
            href="/dashboard/brand-ambassador"
            className={`flex items-center py-3 px-4 rounded-[0.5rem] my-1 ${
              isActive("/dashboard/brand-ambassador")
                ? "bg-accent_secondary text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            <RiMoneyDollarCircleLine
              className={`w-6 h-6 ${
                isActive("/dashboard/brand-ambassador")
                  ? "text-white"
                  : "text-gray-600"
              }`}
            />
            <span className="ml-3 text-sm">Brand Ambassador</span>
          </Link>
          <Link
            href="/dashboard/profile"
            className={`flex items-center py-3 px-4 rounded-[0.5rem] my-1 ${
              isActive("/dashboard/profile")
                ? "bg-accent_secondary text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            <FiUser
              className={`w-6 h-6 ${
                isActive("/dashboard/profile") ? "text-white" : "text-gray-600"
              }`}
            />
            <span className="ml-3 text-sm">Profile</span>
          </Link>
          <button className="flex items-center py-3 px-4 rounded-[0.5rem] text-gray-600 hover:bg-gray-200 mb-12">
            <MdLogout className="w-6 h-6" />
            <span className="ml-3 text-sm">Logout</span>
          </button>
        </nav>
        <div className="bottom-0 w-full px-4 pb-4">
          <ButtonQuaternary btnText={"Get Support"} />
        </div>
      </aside>

      {/* Floating Burger Button for mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-full bg-accent_secondary text-white shadow-md"
        onClick={toggleSidebar}
      >
        <AiOutlineMenu className="w-6 h-6" />
      </button>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto overflow-y-scroll h-full">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
