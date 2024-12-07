import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

const constansts = [
  {
    id: 1,
    label: "Dashboard",
    icon: <Menu />,
    href: "/dashboard",
  },
  {
    id: 2,
    label: "Messages",
    icon: <Menu />,
    href: "/messages",
  },
  {
    id: 3,
    label: "Settings",
    icon: <Menu />,
    href: "/settings",
  },
];

const Sidebar = () => {
  return (
    <div className="flex h-screen bg-black ">
      <div className="hidden md:flex flex-col w-80 bg-gray-800">
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white font-bold uppercase">
            Workers Details
          </span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-gray-800">
            {constansts.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                {item.icon}
                <span className="mx-4 font-medium text-2xl">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
