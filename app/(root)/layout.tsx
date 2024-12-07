import Sidebar from "@/components/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="hidden md:block w-60 z-50">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full h-full md:pl-60 overflow-y-scroll">
        {children}
      </div>

      {/* Mobile Sidebar Overlay */}
      <div className="md:hidden">
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
