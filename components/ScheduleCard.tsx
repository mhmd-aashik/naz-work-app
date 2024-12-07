import React from "react";

interface ScheduleCardProps {
  id: number;
  scheduledStartTime: Date | string;
  scheduledEndTime: Date | string;
  employee: string;
  task: string;
}

const ScheduleCard = ({
  id,
  scheduledEndTime,
  scheduledStartTime,
  employee,
  task,
}: ScheduleCardProps) => {
  return (
    <div
      key={id}
      className="border rounded-xl p-5 flex items-start justify-start flex-col shadow-lg"
    >
      <h1 className="text-2xl font-bold text-blue-600 mb-2">
        🗓 Schedule ID: {id}
      </h1>
      <p className="text-lg font-semibold mb-2">👷 Employee: {employee}</p>
      <p className="text-lg font-semibold mb-2">📋 Task: {task}</p>
      <p className="text-lg font-semibold mb-2">
        ⏰ Start Time: {new Date(scheduledStartTime).toLocaleString()}
      </p>
      <p className="text-lg font-semibold mb-2">
        🕒 End Time: {new Date(scheduledEndTime).toLocaleString()}
      </p>
    </div>
  );
};

export default ScheduleCard;
