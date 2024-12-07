import EmploeesCard from "@/components/EmploeesCard";
import { getAllUser } from "@/lib/actions/user.action";
import React from "react";

export const revalidate = 0; // revalidate the data at most every hour

const Emploees = async () => {
  const employees = await getAllUser();

  return (
    <div className="mt-10 max-w-5xl mx-auto px-2">
      <div className="py-5">
        <h1 className="text-3xl font-bold">All Emploees</h1>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 overflow-y-scroll ">
        {employees?.map((employee) => (
          <EmploeesCard
            key={employee.EmployeeID}
            id={employee.EmployeeID}
            name={employee.Name || ""}
            position={employee.Position}
            skills={employee.SkillSet || ""}
            availability={employee.AvailabilityStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default Emploees;
