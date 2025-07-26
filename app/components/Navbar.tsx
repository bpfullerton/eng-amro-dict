// app/components/Navbar.tsx
'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full border-b px-6 py-4 flex justify-between items-center bg-white shadow-sm">
      <div className="flex gap-6 items-center">
        <Link href="/" className="text-lg font-semibold hover:text-blue-600 transition">Home</Link>
        <Link href="/about" className="text-lg font-semibold hover:text-blue-600 transition">About Ámro</Link>
      </div>

      <a
        href="https://github.com/bpfullerton/eng-amro-dict"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-600 hover:text-black transition"
      >
        GitHub ↗
      </a>
    </nav>
  );
}
