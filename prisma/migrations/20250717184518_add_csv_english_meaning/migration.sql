/*
  Warnings:

  - Added the required column `meaning` to the `AmmroWord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AmmroWord" ADD COLUMN     "meaning" TEXT NOT NULL;
