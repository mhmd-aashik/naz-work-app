"use server";

import prisma from "../db";

export const createUser = async (userData: CreateUserParams) => {
  try {
    const newUser = await prisma.profile.create({
      data: {
        clerkId: userData.clerkId,
        role: userData.role,
        username: userData.username,
        name: userData.name,
        password: userData.password,
        picture: userData.picture,
        email: userData.email,
      },
    });
    return newUser;
  } catch (error) {
    console.error(error);
  }
};
