-- CreateTable
CREATE TABLE "AmmroWord" (
    "id" SERIAL NOT NULL,
    "asr" TEXT NOT NULL,
    "cecamro" TEXT NOT NULL,
    "ipa" TEXT NOT NULL,
    "partOfSpeech" TEXT NOT NULL,
    "ex_ammro" TEXT NOT NULL,
    "ex_english" TEXT NOT NULL,
    "var_middle" TEXT NOT NULL,
    "var_old" TEXT NOT NULL,

    CONSTRAINT "AmmroWord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnglishWord" (
    "id" TEXT NOT NULL,
    "word" TEXT NOT NULL,
    "prn" TEXT NOT NULL,
    "partOfSpeech" TEXT NOT NULL,
    "example" TEXT NOT NULL,
    "et" TEXT NOT NULL,

    CONSTRAINT "EnglishWord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AmmroEnglishMap" (
    "id" SERIAL NOT NULL,
    "englishWordId" TEXT NOT NULL,
    "ammroWordId" INTEGER NOT NULL,

    CONSTRAINT "AmmroEnglishMap_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AmmroEnglishMap_englishWordId_ammroWordId_key" ON "AmmroEnglishMap"("englishWordId", "ammroWordId");

-- AddForeignKey
ALTER TABLE "AmmroEnglishMap" ADD CONSTRAINT "AmmroEnglishMap_englishWordId_fkey" FOREIGN KEY ("englishWordId") REFERENCES "EnglishWord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AmmroEnglishMap" ADD CONSTRAINT "AmmroEnglishMap_ammroWordId_fkey" FOREIGN KEY ("ammroWordId") REFERENCES "AmmroWord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
