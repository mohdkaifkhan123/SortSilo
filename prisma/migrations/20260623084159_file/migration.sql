/*
  Warnings:

  - The `deletedAt` column on the `File` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "File" DROP COLUMN "deletedAt",
ADD COLUMN     "deletedAt" TIMESTAMP(3);
