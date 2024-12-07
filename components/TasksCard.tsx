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
      className="border rounded-xl p-5 flex items-start justify-start flex-col shadow-lg"
    >
      <h1 className="text-2xl font-bold text-blue-600 mb-2">
        🔖 {description}
      </h1>
      <p className="text-lg font-bold mb-2">
        👷 Assigned To: {assignedEmployee.name}
      </p>
      <p className="text-lg font-semibold mb-2">
        📋 Skill Required: {skillRequired}
      </p>
      <p className="text-lg uppercase font-bold mb-2">📊 Status: {status}</p>
      <p className="text-lg font-semibold mb-2">
        📅 Scheduled: {new Date(scheduledDate).toLocaleDateString()}
      </p>
      <p className="text-lg font-semibold mb-2">
        ⏳ Due: {new Date(dueDate).toLocaleDateString()}
      </p>
    </div>
  );
};

export default TasksCard;
