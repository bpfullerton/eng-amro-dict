'use client'

import { AmroWord, EnglishWord } from '@prisma/client';
// pages/test.tsx
import { useState } from 'react';

export default function TestMW() {
  // State variables
  const [word, setWord] = useState(''); // Input word for lookup
  const [results, setResults] = useState<(AmroWord | EnglishWord)[]>([]); // Returned list of definitions
  const [loading, setLoading] = useState(false); // Loading state (shows loading spinner if true)
  const [error, setError] = useState(''); // Error message

  const handleSubmit = async (e: React.FormEvent) => {
    // Prevent default form submission and prevents the page from reloading upon form submission
    e.preventDefault();
    // Reset state before fetching new results
    if (!word.trim()) {
      setError('Please enter a word to search.');
      return;
    }
    setLoading(true);
    setError('');
    setResults([]);

    try {
      // Fetch the word definition from the API
        const res = await fetch(`/api/lookup?word=${word}`);
        if (!res.ok) {
            throw new Error(`Error ${res.status}`);
        }

        // If the response is successful, parse the JSON data
      const data = await res.json();
      setResults(data);
    } catch (err) {
      // If an error occurs, set the error state
      if (err instanceof Error) {
        setError('Failed to fetch definition.');
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 px-4">
      <h1 className="text-2xl font-bold mb-4">English-Amro Bilingual Dictionary</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter an English or Amro word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="space-y-6">
        {results.map((entry, index) => (
          <div key={index} className="border rounded p-4 shadow-sm">
            <h2 className="text-xl font-semibold">
              {'word' in entry ? entry.word : entry.asr}
            </h2>
            {'cecamro' in entry && entry.cecamro && (
              <p className="font-cecamro text-xl">{entry.cecamro}</p>
            )}
            {'ipa' in entry && entry.ipa && <p><strong>IPA:</strong> /{entry.ipa}/</p>}
            {'prn' in entry && entry.prn && (
              <p>
                <strong>Pronunciation:</strong> {entry.prn}
              </p>
            )}
            {entry.partOfSpeech && <p><strong>Part of Speech:</strong> {entry.partOfSpeech}</p>}
            {'example' in entry && entry.example && <p><strong>Example:</strong> {entry.example}</p>}
            {'ex_amro' in entry && 'ex_english' in entry && entry.ex_amro && entry.ex_english && (
              <p><strong>Example:</strong> {entry.ex_amro} = <em>{entry.ex_english}</em></p>
            )}
            {'et' in entry && entry.et && (
              <p><strong>Etymology:</strong> {entry.et}</p>
            )}
            {'var_middle' in entry && 'var_old' in entry && entry.var_middle && entry.var_old && (
              <p>From Middle Ámmro <em>{entry.var_middle}</em>, Old Amomoro <em>{entry.var_old}</em></p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
