import React from "react";

interface TasksCardProps {
  id: number;
  description: string;
  assignedEmployeeID: number;
  skillRequired: string;
  status: string;
  scheduledDate: Date | string;
  dueDate: Date | string;
  assignedEmployee: {
    name: string;
  };
}

const TasksCard = ({
  id,
  description,
  //   assignedEmployeeID,
  skillRequired,
  status,
  scheduledDate,
  dueDate,
  assignedEmployee,
}: TasksCardProps) => {
  return (
    <div
      key={id}
      className="border rounded-2xl p-6 flex flex-col gap-4 shadow-lg bg-white hover:shadow-2xl transition-transform transform hover:scale-105"
    >
      <h1 className="text-3xl font-bold text-blue-600 flex items-center gap-2">
        🔖 <span>{description}</span>
      </h1>

      <p className="text-lg font-medium text-gray-700 flex items-center gap-2">
        👷 <span>Assigned To:</span>
        <span className="font-bold text-gray-900">{assignedEmployee.name}</span>
      </p>

      <p className="text-lg font-medium text-gray-700 flex items-center gap-2">
        📋 <span>Skill Required:</span>
        <span className="font-bold text-gray-900">{skillRequired}</span>
      </p>

      <p
        className={`text-lg font-bold uppercase flex items-center gap-2 ${
          status === "Completed"
            ? "text-green-600"
            : status === "In Progress"
            ? "text-yellow-500"
            : "text-red-600"
        }`}
      >
        📊 <span>Status:</span>
        <span>{status}</span>
      </p>

      <p className="text-lg font-medium text-gray-700 flex items-center gap-2">
        📅 <span>Scheduled:</span>
        <span className="font-semibold text-gray-900">
          {new Date(scheduledDate).toLocaleDateString()}
        </span>
      </p>

      <p className="text-lg font-medium text-gray-700 flex items-center gap-2">
        ⏳ <span>Due:</span>
        <span className="font-semibold text-red-600">
          {new Date(dueDate).toLocaleDateString()}
        </span>
      </p>
    </div>
  );
};

export default TasksCard;
