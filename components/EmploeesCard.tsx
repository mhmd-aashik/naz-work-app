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
  console.log(skill);

  return (
    <div
      key={id}
      className="border rounded-xl p-5 flex items-start justify-start flex-col shadow-lg "
    >
      <h1 className="text-2xl font-bold text-blue-600 mb-2">💼 {name}</h1>
      <p className="text-lg uppercase font-bold  mb-2">👉 {position}</p>
      {skill.map((s, i) => (
        <p key={i} className="text-lg font-semibold">
          🚀 {s}
        </p>
      ))}
      <p
        className={`text-lg font-semibold mt-2 ${
          availability ? "text-green-600" : "text-red-600"
        }`}
      >
        {availability ? "🟢 Available" : "🔴 Not Available"}
      </p>
    </div>
  );
};

export default EmploeesCard;
