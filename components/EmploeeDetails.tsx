import { getAllMachinery } from "@/lib/actions/machinary.action";
import { getAllUser } from "@/lib/actions/user.action";
import React from "react";

const EmploeeDetails = async () => {
  const emploees = await getAllUser();
  const machines = await getAllMachinery();

  const totalEmploees = emploees!.length;
  const totalMachines = machines!.length;

  return (
    <div className="flex flex-wrap gap-10 py-10 justify-center">
      <div className="flex flex-col items-center justify-center h-32 w-64 sm:h-28 sm:w-56 bg-blue-500 rounded-xl p-10">
        <h1 className="text-white font-bold text-xl sm:text-lg">
          Total Employees
        </h1>
        <h1 className="text-4xl sm:text-3xl font-bold">
          {totalEmploees ? totalEmploees : 0}
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center h-32 w-64 sm:h-28 sm:w-56 bg-blue-500 rounded-xl p-10">
        <h1 className="text-white font-bold text-xl sm:text-lg">
          Total Machines
        </h1>
        <h1 className="text-4xl sm:text-3xl font-bold">
          {totalMachines ? totalMachines : 0}
        </h1>
      </div>
    </div>
  );
};

export default EmploeeDetails;
