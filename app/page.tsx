import React from "react";
import Sidebar from "@/components/Sidebar";
import { ChartEmploee } from "@/components/ChartEmploee";

const Home = () => {
  return (
    <div className="flex w-full">
      <div>
        <Sidebar />
      </div>
      <div className="flex items-center max-w-6xl mx-auto justify-center flex-1">
        <div>
          <h1 className="text-4xl font-bold text-center">
            {/* Welcome to the Home Page */}
          </h1>
          <div className="flex gap-5 flex-wrap items-center justify-center">
            <ChartEmploee name="Emploee" />
            <ChartEmploee name="Machinary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
