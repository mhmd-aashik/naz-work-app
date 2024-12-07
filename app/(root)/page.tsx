import React from "react";
import EmploeeDetails from "@/components/EmploeeDetails";
import { ChartEmploee } from "@/components/ChartEmploee";
import { getAllUser } from "@/lib/actions/user.action";

export const revalidate = 0; // revalidate the data at most every hour

const Home = async () => {
  const employeeData = await getAllUser();

  const filteredMonths = employeeData?.map((employee) => {
    const createdAtDate = new Date(employee.createdAt);
    const month = createdAtDate.toLocaleString("default", { month: "long" });
    return {
      MonthCreated: month,
    };
  });

  return (
    <div>
      <div className="flex flex-col items-center max-w-6xl mx-auto justify-center">
        <div>
          <h1 className="text-4xl text-center font-bold mt-5">Dashboard</h1>
          <EmploeeDetails />
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-10">
          <ChartEmploee filteredMonths={filteredMonths} />
        </div>
      </div>
    </div>
  );
};

export default Home;
