import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  if (req.method !== "GET") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  const { searchParams } = new URL(req.url);
  const word = searchParams.get("word");

  if (!word || Array.isArray(word) || word.length === 0) {
    return NextResponse.json({ error: "Invalid word" }, { status: 400 });
  }

  try {
    // Check the database to see if the query is an English word or an Ammro word
    // One of these should be undefined/null/false while the other should have a value
    const english = await Prisma.englishWord.findFirst({
      where: { 
        word: {
            equals: word,
            mode: "insensitive" // Case-insensitive search
        }
      },
    });

    if (english) {
        // Find all Ammro words linked to this English word
      const mappings = await Prisma.amroEnglishMap.findMany({
        where: { englishWordId: english.id },
        include: { amroWord: true },
      });
      const results = mappings.map((m) => m.amroWord);
      return NextResponse.json(results);
    }

    const amro = await Prisma.amroWord.findFirst({
        where: {
            asr: {
            equals: word,
            mode: "insensitive" // Case-insensitive search
            }
        },
    });

    if (amro) {
        // Find all English words linked to this Amro word
      const mappings = await Prisma.amroEnglishMap.findMany({
        where: { amroWordId: amro.id },
        include: { englishWord: true },
      });
      const results = mappings.map((m) => m.englishWord);
      return NextResponse.json(results);
    }

    return NextResponse.json({ error: "Word not found" }, { status: 404 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}