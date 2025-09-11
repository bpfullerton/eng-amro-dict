// app/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Navbar component
 * @returns A navigation bar component with links to home, about, and GitHub.
 */
export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="w-full border-b px-6 py-4 flex justify-between items-center bg-black shadow-sm">
      <div className="flex gap-6 items-center">
        {/* Show link to search page if not already on it */}
        {pathname !== '/' && (
          <Link href="/" className="text-lg font-semibold hover:text-blue-600 transition">Word Search</Link>
        )}

        {/* Show link to about page if not already on it */}
        {pathname !== '/about' && (
          <Link href="/about" className="text-lg font-semibold hover:text-blue-600 transition">About Ámro</Link>
        )}
        
      </div>

      {/* Link to GitHub repository */}
      <a
        href="https://github.com/bpfullerton/eng-amro-dict"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-400 hover:text-gray-300 transition"
      >
        GitHub ↗
      </a>
    </nav>
  );
}
