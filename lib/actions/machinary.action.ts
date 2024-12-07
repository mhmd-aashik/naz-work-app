"use server";

import prisma from "../db";

export const getAllMachinery = async () => {
  try {
    const user = await prisma.machinery.findMany();
    return user;
  } catch (error) {
    console.error(error);
  }
};
