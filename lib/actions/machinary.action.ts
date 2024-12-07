"use server";

import prisma from "../db";

export const getAllMachinery = async () => {
  try {
    const machinary = await prisma.machinery.findMany();
    return machinary;
  } catch (error) {
    console.error(error);
  }
};
