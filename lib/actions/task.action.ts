"use server";

import prisma from "../db";

export const getAllTasks = async () => {
  try {
    const user = await prisma.tasks.findMany({
      include: {
        AssignedEmployee: {
          select: {
            Name: true,
          },
        },
      },
    });
    return user;
  } catch (error) {
    console.error(error);
  }
};
