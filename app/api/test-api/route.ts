import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Define the API key and Prisma client
if (!process.env.MW_API_KEY) {
  throw new Error('Missing MW_API_KEY');
}
const prisma = new PrismaClient();
const MW_API_KEY = process.env.MW_API_KEY as string;

// API handler to fetch word definitions from the Merriam-Webster API
// and return a simplified response
export async function GET(req: NextRequest) {
  // Pull the word from the query parameters, making sure only GET requests are allowed
  if (req.method !== 'GET') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }
  const { searchParams } = new URL(req.url);
  const word = searchParams.get('word');

  // Validate the word parameter
  if (!word || Array.isArray(word) || word.length === 0) {
    return NextResponse.json({ error: 'Invalid word' }, { status: 400 });
  }

  // Fetch the word definition from the Merriam-Webster API
  try {
    const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${MW_API_KEY}`;
    const apiRes = await fetch(url);
    const data = await apiRes.json();

    // Check if the response is valid
    if (!Array.isArray(data) || data.length === 0 || typeof data[0] !== 'object' || !data[0].meta) {
      console.log('Invalid response from Merriam-Webster API:', data);
      return NextResponse.json({ error: 'Word not found or invalid response' }, { status: 404 });
    }

    // Simplify the response
    const simplified = data.map(entry => ({
      id: entry.meta?.id, // Unique identifier for the word
      word: entry.hwi?.hw, // The word itself
      ipa: entry.hwi?.prs?.[0]?.ipa ?? null, // International Phonetic Alphabet representation
      partOfSpeech: entry.fl ?? null, // Part of speech
      shortdef: entry.shortdef, // Short definition
      etymology: entry.et ?? null, // Etymology
      example: entry.suppl?.examples?.[0]?.t ?? null // Example usage
    }));

    // Send the simplified response
    return NextResponse.json(simplified);
  } catch (err) {
    // Handle errors gracefully
    if (err instanceof Error) {
      console.error(err);
      return NextResponse.json({ error: 'API error' }, { status: 500 });
    }
  }
}
