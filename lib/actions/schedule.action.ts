"use server";

import prisma from "../../prisma/db";

export const getAllSchedule = async () => {
  try {
    const user = await prisma.schedule.findMany({
      include: {
        Employee: {
          select: {
            Name: true,
          },
        },
        Task: {
          select: {
            TaskDescription: true,
          },
        },
      },
    });
    return user;
  } catch (error) {
    console.error(error);
  }
};
