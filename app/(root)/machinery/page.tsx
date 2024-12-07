import MachineryCard from "@/components/MachineryCard";
import { getAllMachinery } from "@/lib/actions/machinary.action";
import React from "react";

const Machinary = async () => {
  const machinery = await getAllMachinery();

  return (
    <div className="mt-10 max-w-5xl mx-auto px-2">
      <div className="py-5">
        <h1 className="text-3xl font-bold">All Machinary</h1>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 ">
        {machinery?.map((machine) => (
          <MachineryCard
            key={machine.MachineID}
            id={machine.MachineID}
            type={machine.Type}
            status={machine.MaintenanceStatus}
            date={machine.LastMaintenanceDate}
            maintenance={machine.PredictiveMaintenanceRequired}
          />
        ))}
      </div>
    </div>
  );
};

export default Machinary;
