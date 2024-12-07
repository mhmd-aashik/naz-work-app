import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Settings } from "lucide-react";

const menuItems = [
  { label: "Employees", href: "/employees" },
  { label: "Machineries", href: "/machineries" },
  { label: "Tasks", href: "/tasks" },
  { label: "Schedule", href: "/schedule" },
  { label: "Maintenance", href: "/maintenance" },
];

const Sidebar = () => {
  return (
    <aside
      className="group/sidebar hidden md:flex flex-col shrink-0 lg:w-[300px] bg-black w-[250px] transition-all duration-300 ease-in-out border-r border-dashed border-neutral-200"
      id="sidenav-main"
    >
      {/* Logo Section */}
      <div className="flex shrink-0 px-8 py-6 items-center justify-center h-[96px]">
        <Link href="/" className="size-16">
          <Image
            alt="Logo"
            src="https://media.istockphoto.com/id/871461336/vector/icon-for-business-management-recruitment-of-employees-team-work.jpg?s=612x612&w=0&k=20&c=FRna_epaMZsMGJN8ubve0pvEStVWQNzIyMy0lla91Ow="
            width={100}
            height={20}
            className="rounded-full"
          />
        </Link>
      </div>

      <div className="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>

      {/* User Info Section */}
      <div className="flex items-center justify-between px-8 py-5">
        <div className="flex items-center">
          <div className="mr-4">
            <Image
              className="w-[40px] h-[40px] object-cover rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVOwCr930Obybx6LGYJOWUNcm7U5tT_3u5mg&s"
              alt="Avatar"
              width={40}
              height={40}
            />
          </div>
          <div>
            <a
              href="#"
              className="dark:hover:text-primary hover:text-primary transition-colors duration-200 ease-in-out text-[1.075rem] font-medium dark:text-neutral-400 text-white"
            >
              Nazihath
            </a>
            <span className="text-neutral-400 dark:text-neutral-500 font-medium block text-[0.85rem]">
              Manager
            </span>
          </div>
        </div>
        <button className="inline-flex items-center text-white hover:text-primary">
          <Settings size={24} />
        </button>
      </div>

      <div className="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>

      {/* Navigation Menu */}
      <div className="relative pl-3 my-5 overflow-y-scroll">
        <div className="flex flex-col w-full font-medium">
          {menuItems.map((item, index) => (
            <div key={index}>
              <span className="select-none flex items-center px-4 py-3 cursor-pointer my-2 rounded-lg hover:bg-neutral-800">
                <Link
                  href={item.href}
                  className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400 hover:text-primary text-white"
                >
                  <span className="mr-2">{index + 1}.</span>
                  {item.label}
                </Link>
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
