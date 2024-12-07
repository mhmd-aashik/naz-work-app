import React from "react";
import EmploeeDetails from "@/components/EmploeeDetails";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center max-w-6xl mx-auto justify-center flex-1">
        <div>
          <h1 className="text-4xl text-center font-bold mt-5">Dashboard</h1>
          <EmploeeDetails />
        </div>

        <div className="flex gap-5 flex-wrap items-center justify-center"></div>
      </div>
    </div>
  );
};

export default Home;
