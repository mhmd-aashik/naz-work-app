import React from "react";

interface MachineryCardProps {
  id: number;
  type: string;
  status: string;
  date: Date | string | null;
  maintenance: boolean;
}

const MachineryCard = ({
  id,
  type,
  status,
  date,
  maintenance,
}: MachineryCardProps) => {
  return (
    <div
      key={id}
      className="border rounded-xl p-6 flex flex-col gap-4 shadow-xl bg-white transition hover:shadow-2xl hover:scale-105"
    >
      <h1 className="text-3xl font-bold text-blue-500 flex items-center gap-2">
        💼 <span>Start Type:</span>{" "}
        <span className="text-gray-800">{type}</span>
      </h1>
      <p className="text-lg uppercase font-bold text-gray-600 flex items-center gap-2">
        👉 <span>End Status:</span> <span className="text-black">{status}</span>
      </p>
      <p className="text-lg font-medium text-gray-700 flex items-center gap-2">
        🚀 <span>Start Date:</span>{" "}
        <span className="text-gray-900">{date?.toLocaleString()}</span>
      </p>
      <p
        className={`text-lg font-semibold mt-2 flex items-center gap-2 ${
          maintenance ? "text-green-600" : "text-red-600"
        }`}
      >
        {maintenance ? "🟢" : "🔴"} <span>Maintenance Status:</span>{" "}
        <span>{maintenance ? "Available" : "Not Available"}</span>
      </p>
    </div>
  );
};

export default MachineryCard;
