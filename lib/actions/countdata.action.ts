import prisma from "@/prisma/db";

export const getAllUserCount = async () => {
  try {
    const user = await prisma.employees.findMany();
    return user.length;
  } catch (error) {
    console.error(error);
  }
};

export const getAllMachineryCount = async () => {
  try {
    const user = await prisma.machinery.findMany();
    return user.length;
  } catch (error) {
    console.error(error);
  }
};
