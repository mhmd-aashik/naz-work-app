import React from "react";

interface MaintenanceSchedulecardProps {
  id: number;
  scheduledDate: Date | string;
  maintenanceType: string;
  maintenanceStatus: string;
  machine: string;
}

const MaintenanceSchedulecard = ({
  scheduledDate,
  maintenanceStatus,
  maintenanceType,
  id,
  machine,
}: MaintenanceSchedulecardProps) => {
  return (
    <div
      key={id}
      className="border rounded-xl p-5 flex flex-col gap-4 shadow-lg bg-white hover:shadow-2xl transition-transform transform hover:scale-105"
    >
      {/* Maintenance ID */}
      <h1 className="text-2xl font-bold text-blue-600 mb-2">
        🗓 Schedule ID: {id}
      </h1>

      {/* Machine Name */}
      <p className="text-lg font-semibold text-gray-700 mb-2">
        🏭 Machine: <span className="text-gray-900">{machine}</span>
      </p>

      {/* Scheduled Date */}
      <p className="text-lg font-semibold text-gray-700 mb-2">
        📅 Scheduled Date:{" "}
        <span className="text-gray-900">
          {new Date(scheduledDate).toLocaleDateString()}
        </span>
      </p>

      {/* Maintenance Type */}
      <p className="text-lg font-semibold text-gray-700 mb-2">
        🛠 Maintenance Type:{" "}
        <span className="text-gray-900">{maintenanceType}</span>
      </p>

      {/* Maintenance Status */}
      <p
        className={`text-lg font-bold uppercase mb-2 ${
          maintenanceStatus === "Completed"
            ? "text-green-600"
            : maintenanceStatus === "In Progress"
            ? "text-yellow-500"
            : "text-red-600"
        }`}
      >
        📊 Status: {maintenanceStatus}
      </p>
    </div>
  );
};

export default MaintenanceSchedulecard;
