import ScheduleCard from "@/components/ScheduleCard";
import { getAllSchedule } from "@/lib/actions/schedule.action";
import React from "react";

export const revalidate = 0; // revalidate the data at most every hour

const Schedule = async () => {
  const schedules = await getAllSchedule();

  return (
    <div className="mt-10 max-w-5xl mx-auto px-2">
      <div className="py-5">
        <h1 className="text-3xl font-bold">All Schedules</h1>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {schedules?.map((schedule) => (
          <ScheduleCard
            key={schedule.ScheduleID}
            id={schedule.ScheduleID}
            scheduledStartTime={schedule.ScheduledStartTime || ""}
            scheduledEndTime={schedule.ScheduledEndTime || ""}
            employee={schedule.Employee?.Name || ""}
            task={schedule.Task?.TaskDescription || ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
