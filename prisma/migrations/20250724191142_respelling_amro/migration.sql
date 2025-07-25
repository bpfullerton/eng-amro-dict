/*
  Warnings:

  - You are about to drop the `AmmroEnglishMap` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AmmroWord` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AmmroEnglishMap" DROP CONSTRAINT "AmmroEnglishMap_ammroWordId_fkey";

-- DropForeignKey
ALTER TABLE "AmmroEnglishMap" DROP CONSTRAINT "AmmroEnglishMap_englishWordId_fkey";

-- DropTable
DROP TABLE "AmmroEnglishMap";

-- DropTable
DROP TABLE "AmmroWord";

-- CreateTable
CREATE TABLE "AmroWord" (
    "id" SERIAL NOT NULL,
    "asr" TEXT NOT NULL,
    "cecamro" TEXT NOT NULL,
    "ipa" TEXT NOT NULL,
    "partOfSpeech" TEXT NOT NULL,
    "ex_amro" TEXT NOT NULL,
    "ex_english" TEXT NOT NULL,
    "var_middle" TEXT NOT NULL,
    "var_old" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,

    CONSTRAINT "AmroWord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AmroEnglishMap" (
    "id" SERIAL NOT NULL,
    "englishWordId" TEXT NOT NULL,
    "amroWordId" INTEGER NOT NULL,
    "partOfSpeech" TEXT,

    CONSTRAINT "AmroEnglishMap_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AmroEnglishMap_englishWordId_amroWordId_partOfSpeech_key" ON "AmroEnglishMap"("englishWordId", "amroWordId", "partOfSpeech");

-- AddForeignKey
ALTER TABLE "AmroEnglishMap" ADD CONSTRAINT "AmroEnglishMap_englishWordId_fkey" FOREIGN KEY ("englishWordId") REFERENCES "EnglishWord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AmroEnglishMap" ADD CONSTRAINT "AmroEnglishMap_amroWordId_fkey" FOREIGN KEY ("amroWordId") REFERENCES "AmroWord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
