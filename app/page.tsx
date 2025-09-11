// app/page.tsx
'use client'

import { AmroWord, EnglishWord } from '@prisma/client';
import { useState } from 'react';

/**
 * SearchPage component
 * @returns A React component for the search page of the English-Ámro bilingual dictionary.
 */
export default function SearchPage() {
  // State variables
  const [word, setWord] = useState(''); // Input word for lookup
  const [results, setResults] = useState<(AmroWord | EnglishWord)[]>([]); // Returned list of English or Ámro definitions
  const [loading, setLoading] = useState(false); // Loading state (shows loading spinner if true)
  const [error, setError] = useState(''); // Error message

  /**
   * Handles form submission for word lookup.
   * @param e - Form event
   * @returns A promise that resolves when the fetch is complete.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    // Prevent default form submission and prevents the page from reloading upon form submission
    e.preventDefault();
    
    // Return an error if the input word is empty
    if (!word.trim()) {
      setError('Please enter a word to search.');
      return;
    }
    // Reset state before fetching new results
    setLoading(true);
    setError('');
    setResults([]);

    try {
      // Fetch the word definition from the API, returning any error messages.
      // The search term is sent as the 'word' query parameter.
      const res = await fetch(`/api/lookup?word=${word}`);
      if (!res.ok) {
        switch (res.status) {
          case 400:
            setError('Invalid word. Please enter a valid English or Ámro word.');
            break;
          case 404:
            setError('Oops, looks like we couldn\'t find that word in our dictionary. Please try another one.');
            break;
          case 405:
            setError('Sorry, something went wrong on our end. Please try again later.');
            break;
          case 500:
            setError('Sorry, something went wrong with our server. Please try again later.');
            break;
        }
        throw new Error(`Error ${res.status}`);
      }

      // If the response is successful, parse the JSON data
      const data = await res.json();
      setResults(data);
    } catch (err) {
      // If an error occurs during fetch, log it to the console
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Render the search page
  return (
    <div className="max-w-xl mx-auto mt-12 px-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the English-Ámro Bilingual Dictionary!</h1>
      <h6 className="text-lg mb-4">Enter an English or Ámro word to search for its definition.</h6>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Enter an English or Ámro word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className="border p-2 rounded w-full"
        />
        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Show loading symbol or error message if applicable */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {/* Display search results as a list of definitions */}
      <div className="space-y-6">
        {results.map((entry, index) => (
          <div key={index} className="border rounded p-4 shadow-sm">
            <div className="flex items-baseline gap-4 mb-2">

              {/* Main word */}
              <h2 className="text-xl font-semibold">
                {'word' in entry ? entry.word : entry.asr}
              </h2>

              {/* Cecamro version if Amro */}
              <span className="font-cecamro text-xl">
                {'cecamro' in entry && entry.cecamro ? entry.cecamro : ''}
              </span>

            </div>

            {/* Pronunciation (IPA if Amro, MW prn if English) */}
            {'ipa' in entry && entry.ipa && <span>/{entry.ipa}/</span>}
            {'prn' in entry && entry.prn && <span>/{entry.prn}/</span>}

            {/* Part of speech and meaning */}
            {'meaning' in entry && entry.meaning && entry.partOfSpeech && (
              <p>
                <strong>{entry.partOfSpeech}</strong> - {entry.meaning}
              </p>
            )}

            {/* Example sentence */}
            {'example' in entry && entry.example && <p><strong>Example:</strong> {entry.example}</p>}
            {'ex_amro' in entry && 'ex_english' in entry && entry.ex_amro && entry.ex_english && (
              <p><strong>Example:</strong> {entry.ex_amro} = <em>{entry.ex_english}</em></p>
            )}

            {/* Etymology */}
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
