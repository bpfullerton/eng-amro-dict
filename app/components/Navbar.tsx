// app/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="w-full border-b px-6 py-4 flex justify-between items-center bg-black shadow-sm">
      <div className="flex gap-6 items-center">
        {pathname !== '/' && (
          <Link href="/" className="text-lg font-semibold hover:text-blue-600 transition">Word Search</Link>
        )}

        {pathname !== '/about' && (
          <Link href="/about" className="text-lg font-semibold hover:text-blue-600 transition">About Ámro</Link>
        )}
        
      </div>

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
