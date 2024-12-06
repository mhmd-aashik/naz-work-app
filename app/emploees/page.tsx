import { auth } from "@clerk/nextjs/server";
import React from "react";

const Emploees = async () => {
  const { userId } = await auth.protect();

  console.log(userId, "userId");

  return <h1 className="text-3xl font-bold text-blue-500">Hello, {userId}!</h1>;
};

export default Emploees;
