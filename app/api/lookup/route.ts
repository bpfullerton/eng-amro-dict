// app/api/lookup/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

/**
 * Handles the GET request for word lookup.
 * @param req The incoming request object
 * @returns A NextResponse object containing the lookup results or an error message
 */
export async function GET(req: NextRequest) {
  if (req.method !== "GET") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  // Get the 'word' query parameter from the request URL, containing the search term
  const { searchParams } = new URL(req.url);
  const word = searchParams.get("word");

  if (!word || Array.isArray(word) || word.length === 0) {
    return NextResponse.json({ error: "Invalid word" }, { status: 400 });
  }

  try {
    // Check the database to see if the query is an English word or an Amro word
    // One of these should be undefined/null/false while the other should have a value
    const english = await Prisma.englishWord.findFirst({
      where: { 
        word: {
            equals: word,
            mode: "insensitive", // Case-insensitive search
            not: "" // Exclude empty strings
        }
      },
    });

    if (english) {
      // Find all Amro words linked to this English word
      const mappings = await Prisma.amroEnglishMap.findMany({
        where: { englishWordId: english.id },
        include: { amroWord: true },
      });

      if (mappings.length === 0) {
        return NextResponse.json({ error: "No Amro words found for this English word" }, { status: 404 });
      }

      const results = mappings.map((m) => m.amroWord);
      return NextResponse.json(results);
    }

    const amro = await Prisma.amroWord.findFirst({
        where: {
            asr: {
              equals: word,
              mode: "insensitive", // Case-insensitive search
              not: "" // Exclude empty strings
            }
        },
    });

    if (amro) {
      // Find all English words linked to this Amro word
      const mappings = await Prisma.amroEnglishMap.findMany({
        where: { amroWordId: amro.id },
        include: { englishWord: true },
      });

      if (mappings.length === 0) {
        return NextResponse.json({ error: "No English words found for this Amro word" }, { status: 404 });
      }

      const results = mappings.map((m) => m.englishWord);
      return NextResponse.json(results);
    }

    return NextResponse.json({ error: "Word not found" }, { status: 404 });
    
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}