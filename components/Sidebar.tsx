"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const constansts = [
  {
    id: 1,
    label: "Home",
    icon: <Menu />,
    href: "/",
  },
  {
    id: 2,
    label: "Employees",
    icon: <Menu />,
    href: "/employees",
  },
  {
    id: 3,
    label: "Machinery",
    icon: <Menu />,
    href: "/machinery",
  },
  {
    id: 4,
    label: "Maintenance",
    icon: <Menu />,
    href: "/maintenanceschedule",
  },
  {
    id: 5,
    label: "Schedule",
    icon: <Menu />,
    href: "/schedule",
  },
  {
    id: 6,
    label: "Task",
    icon: <Menu />,
    href: "/task",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden relative">
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 text-gray-100 bg-gray-800 fixed top-4 left-4 z-50 rounded-md focus:outline-none"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-80 bg-gray-800 transition-transform duration-300 transform md:translate-x-0 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:flex md:flex-col`}
      >
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white font-bold uppercase">
            Workers Details
          </span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-gray-800">
            {constansts.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 rounded-md ${
                    isActive ? "!bg-blue-500" : ""
                  }`}
                  onClick={() => setIsOpen(false)} // Close sidebar on link click
                >
                  {item.icon}
                  <span className="mx-4 font-medium text-2xl">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
