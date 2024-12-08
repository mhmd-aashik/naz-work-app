import Link from "next/link";
import React from "react";

interface EmployeesCardProps {
  id: number;
  name: string;
  position: string;
  skills: string;
  availability: boolean;
}

const EmploeesCard = ({
  id,
  name,
  position,
  skills,
  availability,
}: EmployeesCardProps) => {
  const skill = skills.split(",");

  return (
    <Link
      href={`/employee/${id}`}
      key={id}
      className="border rounded-xl p-6 flex flex-col gap-4 shadow-xl bg-white hover:shadow-2xl transition-transform transform hover:scale-105"
    >
      {/* Name Section */}
      <h1 className="text-3xl font-bold text-blue-500 flex items-center gap-2">
        💼 <span>{name}</span>
      </h1>

      {/* Position Section */}
      <p className="text-lg uppercase font-bold text-gray-600 flex items-center gap-2">
        👉 <span>Position:</span> <span className="text-black">{position}</span>
      </p>

      {/* Skills Section */}
      <div className="mt-2">
        <p className="text-lg font-semibold text-gray-700 mb-2">🚀 Skills:</p>
        <ul className="list-disc list-inside space-y-1">
          {skill.slice(0, 1).map((s, i) => (
            <li key={i} className="text-lg text-gray-800">
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Availability Section */}
      <p
        className={`text-lg font-semibold mt-4 flex items-center gap-2 ${
          availability ? "text-green-600" : "text-red-600"
        }`}
      >
        {availability ? "🟢 Available" : "🔴 Not Available"}
      </p>
    </Link>
  );
};

export default EmploeesCard;
