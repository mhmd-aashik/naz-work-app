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
      className="border rounded-xl p-5 flex items-start justify-start flex-col shadow-lg "
    >
      <h1 className="text-2xl font-bold text-blue-600 mb-2">💼 {type}</h1>
      <p className="text-lg uppercase font-bold  mb-2">👉 {status}</p>
      <p className="text-lg font-semibold">🚀 {date?.toLocaleString()}</p>

      <p
        className={`text-lg font-semibold mt-2 ${
          maintenance ? "text-green-600" : "text-red-600"
        }`}
      >
        {maintenance ? "🟢 Available" : "🔴 Not Available"}
      </p>
    </div>
  );
};

export default MachineryCard;
