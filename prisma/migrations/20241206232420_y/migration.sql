/*
  Warnings:

  - You are about to drop the column `lastName` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "lastName",
ALTER COLUMN "picture" DROP NOT NULL,
ALTER COLUMN "joined" DROP NOT NULL;
