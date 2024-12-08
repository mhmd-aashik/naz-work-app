"use server";

import { Employee } from "@/types";
import prisma from "../db";
import { revalidatePath } from "next/cache";

export const createUser = async (emploee: Employee) => {
  try {
    await prisma.employees.create({
      data: {
        Name: emploee.Name,
        Position: emploee.Position,
        SkillSet: emploee.SkillSet,
        AvailabilityStatus: emploee.AvailabilityStatus,
      },
    });
    revalidatePath("/employees");
  } catch (error) {
    console.error(error);
  }
};

export const getAllUser = async () => {
  try {
    const user = await prisma.employees.findMany();
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (id: number, emploee: Employee) => {
  try {
    const user = await prisma.employees.update({
      where: {
        EmployeeID: id,
      },
      data: {
        Name: emploee.Name,
        Position: emploee.Position,
        SkillSet: emploee.SkillSet,
        AvailabilityStatus: emploee.AvailabilityStatus,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (id: number) => {
  try {
    const user = await prisma.employees.delete({
      where: {
        EmployeeID: id,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
  }
};
