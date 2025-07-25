/*
  Warnings:

  - A unique constraint covering the columns `[englishWordId,ammroWordId,partOfSpeech]` on the table `AmmroEnglishMap` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "AmmroEnglishMap_englishWordId_ammroWordId_key";

-- AlterTable
ALTER TABLE "AmmroEnglishMap" ADD COLUMN     "partOfSpeech" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "AmmroEnglishMap_englishWordId_ammroWordId_partOfSpeech_key" ON "AmmroEnglishMap"("englishWordId", "ammroWordId", "partOfSpeech");
