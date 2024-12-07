import MaintenanceSchedulecard from "@/components/MaintenanceSchedulecard";
import { getAllMaintenanceSchedule } from "@/lib/actions/maintenanceschedule.action";
import React from "react";

export const revalidate = 0; // revalidate the data at most every hour

const MaintenanceSchedule = async () => {
  const maintenanceschedules = await getAllMaintenanceSchedule();

  console.log(maintenanceschedules, "maintenanceschedule");
  return (
    <div className="mt-10 max-w-5xl mx-auto px-2">
      <div className="py-5">
        <h1 className="text-3xl font-bold">All Maintenance Schedule</h1>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {maintenanceschedules?.map((maintenanceschedule) => (
          <MaintenanceSchedulecard
            key={maintenanceschedule.MaintenanceID}
            id={maintenanceschedule.MaintenanceID}
            scheduledDate={maintenanceschedule.ScheduledDate}
            maintenanceType={maintenanceschedule.MaintenanceType}
            maintenanceStatus={maintenanceschedule.Status}
            machine={maintenanceschedule.Machine.Type}
          />
        ))}
      </div>
    </div>
  );
};

export default MaintenanceSchedule;
