"use server";

import prisma from "../db";

export const getAllMaintenanceSchedule = async () => {
  try {
    const schedule = await prisma.maintenanceSchedule.findMany({
      include: {
        Machine: {
          select: {
            Type: true,
          },
        },
      },
    });
    return schedule;
  } catch (error) {
    console.error(error);
  }
};
